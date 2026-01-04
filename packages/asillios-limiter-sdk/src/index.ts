/**
 * Token usage information from Anthropic's Claude API responses.
 * @see https://docs.anthropic.com/claude/reference/messages_post
 */
export interface AnthropicUsage {
  /** Number of tokens in the input/prompt */
  input_tokens: number;
  /** Number of tokens in the model's response */
  output_tokens: number;
}

/**
 * Token usage information from OpenAI's API responses.
 * @see https://platform.openai.com/docs/api-reference/chat/object
 */
export interface OpenAIUsage {
  /** Number of tokens in the prompt */
  prompt_tokens: number;
  /** Number of tokens in the completion/response */
  completion_tokens: number;
}

/**
 * Union type representing token usage from supported LLM providers.
 * Automatically extracts usage information from API responses.
 */
export type LLMUsage = AnthropicUsage | OpenAIUsage;

/**
 * Statistics about a user's token and cost usage within the rate limit window.
 * Returned by the `stats()` method.
 */
export interface UserStats {
  /** Total tokens consumed by the user in the current window */
  tokensUsed: number;
  /** Tokens remaining before hitting the limit */
  remaining: number;
  /** When the usage window resets (for sliding windows, this is when the oldest usage expires) */
  resetAt: Date;
  /** Percentage of the token limit used (0-100) */
  percentUsed: number;
  /** Total estimated cost in USD (only present if `trackCost` is enabled) */
  costUsed?: number;
  /** Remaining cost budget in USD (only present if `costLimit` is set) */
  costRemaining?: number;
}

/**
 * A single usage record tracking tokens, cost, and timestamp.
 * Used internally to implement sliding window rate limiting.
 */
export interface UsageEntry {
  /** Number of tokens consumed in this usage */
  tokens: number;
  /** Estimated cost in USD for this usage */
  cost: number;
  /** Unix timestamp (milliseconds) when this usage occurred */
  timestamp: number;
}

/**
 * Internal data structure for storing a user's usage history.
 */
export interface UserData {
  /** Array of usage entries within the tracking window */
  entries: UsageEntry[];
  /** Set of threshold percentages that have already triggered callbacks */
  thresholdsTriggered: Set<number>;
}

/**
 * Storage adapter interface for implementing custom backends.
 * Implement this interface to use Redis, databases, or other storage solutions.
 *
 * @example
 * ```typescript
 * class CustomStorage implements StorageAdapter {
 *   async get(userId: string) { ... }
 *   async set(userId: string, data: UserData) { ... }
 *   async delete(userId: string) { ... }
 * }
 * ```
 */
export interface StorageAdapter {
  /** Retrieve user data by user ID */
  get(userId: string): Promise<UserData | null>;
  /** Store or update user data */
  set(userId: string, data: UserData): Promise<void>;
  /** Delete user data (used for resets) */
  delete(userId: string): Promise<void>;
}

/**
 * Simple in-memory storage adapter (default).
 * Data is lost when the process restarts. For production use, consider Redis or database storage.
 */
export class MemoryStorage implements StorageAdapter {
  private store = new Map<string, UserData>();

  async get(userId: string): Promise<UserData | null> {
    return this.store.get(userId) ?? null;
  }

  async set(userId: string, data: UserData): Promise<void> {
    this.store.set(userId, data);
  }

  async delete(userId: string): Promise<void> {
    this.store.delete(userId);
  }
}

/**
 * Minimal Redis client interface required by RedisStorage.
 * Compatible with ioredis, node-redis, and similar clients.
 */
export interface RedisClient {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<unknown>;
  del(key: string): Promise<unknown>;
}

/**
 * Redis storage adapter for distributed rate limiting.
 * Bring your own Redis client (ioredis, node-redis, etc).
 *
 * @example
 * ```typescript
 * import Redis from "ioredis";
 * const redis = new Redis();
 * const storage = new RedisStorage(redis, "myapp:");
 * ```
 */
export class RedisStorage implements StorageAdapter {
  /**
   * Creates a Redis storage adapter.
   * @param redis - Redis client instance
   * @param prefix - Key prefix for namespacing (default: "limiter:")
   */
  constructor(
    private redis: RedisClient,
    private prefix = "limiter:",
  ) {}

  async get(userId: string): Promise<UserData | null> {
    const data = await this.redis.get(this.prefix + userId);
    if (!data) return null;
    const parsed = JSON.parse(data);
    return {
      entries: parsed.entries || [],
      thresholdsTriggered: new Set(parsed.thresholdsTriggered || []),
    };
  }

  async set(userId: string, data: UserData): Promise<void> {
    await this.redis.set(
      this.prefix + userId,
      JSON.stringify({
        entries: data.entries,
        thresholdsTriggered: [...data.thresholdsTriggered],
      })
    );
  }

  async delete(userId: string): Promise<void> {
    await this.redis.del(this.prefix + userId);
  }
}

/**
 * Model pricing per 1,000 tokens (input and output).
 * Prices are in USD and based on official provider pricing as of the library's release.
 */
export const MODEL_PRICING: Record<string, { input: number; output: number }> =
  {
    // anthropic
    "claude-3-opus": { input: 0.015, output: 0.075 },
    "claude-3-sonnet": { input: 0.003, output: 0.015 },
    "claude-3-haiku": { input: 0.00025, output: 0.00125 },
    "claude-3-5-haiku": {input: 0.0008, output: 0.004},
    "claude-sonnet-4": { input: 0.003, output: 0.015 },
    "claude-opus-4": {input: 0.015, output: 0.075},
    "claude-haiku-4-5": {input: 0.001, output: 0.005},
    "claude-sonnet-4-5": {input: 0.003, output: 0.015},
    "claude-opus-4-5": {input: 0.005, output: 0.025},

    // openai
    "gpt-5.2": {input: 0.00175, output: 0.014},
    "gpt-5.1": {input: 0.00125, output: 0.010},
    "gpt-5": {input: 0.00125, output: 0.010},
    "gpt-5-mini": {input: 0.00025, output: 0.002},
    "gpt-5-nano": {input: 0.00005, output: 0.0004},
    "gpt-4": { input: 0.03, output: 0.06 },
    "gpt-4-turbo": { input: 0.01, output: 0.03 },
    "gpt-4o": { input: 0.005, output: 0.015 },
    "gpt-4o-mini": { input: 0.00015, output: 0.0006 },
    "gpt-3.5-turbo": { input: 0.0005, output: 0.0015 },
  };

/**
 * Configuration for a single rate limit.
 */
export interface LimitConfig {
  /** Maximum tokens allowed in this window */
  tokens: number;
  /** Time window in milliseconds */
  window: number;
}

/**
 * Configuration options for creating a rate limiter.
 *
 * @example
 * ```typescript
 * // Simple: single limit
 * const limiter = createLimiter({
 *   limit: 100000,
 *   window: 60 * 60 * 1000, // 1 hour
 * });
 *
 * // Advanced: multiple limits with cost tracking
 * const limiter = createLimiter({
 *   limits: [
 *     { tokens: 10000, window: 60 * 1000 },       // 10k per minute
 *     { tokens: 100000, window: 60 * 60 * 1000 }, // 100k per hour
 *   ],
 *   trackCost: true,
 *   costLimit: 5.0,
 *   burstPercent: 20,
 * });
 * ```
 */
export interface LimiterConfig {
  /** Maximum tokens allowed (simple config) */
  limit?: number;
  /** Time window in milliseconds (simple config) */
  window?: number;
  /** Multiple limits for different time windows (advanced config) */
  limits?: LimitConfig[];
  /** Allow users to temporarily exceed limits by this percentage (e.g., 20 for 20%) */
  burstPercent?: number;
  /** Enable cost tracking based on model pricing */
  trackCost?: boolean;
  /** Maximum cost in USD (requires trackCost or will auto-enable it) */
  costLimit?: number;
  /** Custom storage backend (default: MemoryStorage) */
  storage?: StorageAdapter;
  /** Callback fired when user crosses usage thresholds */
  onThreshold?: (userId: string, percent: number) => void;
  /** Percentage thresholds that trigger callbacks (default: [80, 90, 100]) */
  thresholds?: number[];
}

/**
 * Extracts token counts from LLM API responses.
 * Supports both Anthropic and OpenAI response formats.
 * @internal
 */
function extractTokens(response: unknown): { input: number; output: number } {
  if (!response || typeof response !== "object") return { input: 0, output: 0 };

  const res = response as Record<string, unknown>;

  if (res.usage && typeof res.usage === "object") {
    const usage = res.usage as Record<string, unknown>;

    // anthropic style
    if (typeof usage.input_tokens === "number" && typeof usage.output_tokens === "number") {
      return { input: usage.input_tokens, output: usage.output_tokens };
    }

    // openai style
    if (typeof usage.prompt_tokens === "number" && typeof usage.completion_tokens === "number") {
      return { input: usage.prompt_tokens, output: usage.completion_tokens };
    }
  }

  return { input: 0, output: 0 };
}

/**
 * Calculates estimated cost based on model pricing.
 * @internal
 */
function calculateCost(input: number, output: number, model?: string): number {
  if (!model) return 0;
  // find matching model (partial match for versioned model names)
  const key = Object.keys(MODEL_PRICING).find((k) => model.includes(k));
  if (!key) return 0;
  const pricing = MODEL_PRICING[key];
  return (input / 1000) * pricing.input + (output / 1000) * pricing.output;
}

/**
 * Validates the limiter configuration.
 * Tokens cannot be negative, thresholds must be between 0-100, etc.
 * @internal
 */
function validateLimiterConfig(config: LimiterConfig): void {
  if (config.limit !== undefined && config.limit < 0) {
    throw new Error("The maximum tokens allowed (limit) must be non-negative.");
  }

  if (config.window !== undefined && config.window < 0) {
    throw new Error("The time window (window) must be non-negative.");
  }

  if (config.burstPercent !== undefined && config.burstPercent < 0) {
    throw new Error("The burst percentage (burstPercent) must be non-negative.");
  }

  if (config.costLimit !== undefined && config.costLimit < 0) {
    throw new Error("The maximum cost in USD (costLimit) must be non-negative.");
  }

  if (config.thresholds !== undefined) {
    for (const threshold of config.thresholds) {
      if (threshold < 0 || threshold > 100) {
        throw new Error("Threshold percentages must be between 0 and 100.");
      }
    }
  }

  if (config.limits !== undefined) {
    if (!Array.isArray(config.limits) || config.limits.length === 0) {
      throw new Error("The limits array must be a non-empty array.");
    }
    for (const limit of config.limits) {
      if (limit.tokens < 0) {
        throw new Error("Each limit's tokens value must be non-negative.");
      }
      if (limit.window < 0) {
        throw new Error("Each limit's window value must be non-negative.");
      }
    }
  }
}

/**
 * Validates the user ID.
 * @param userId
 */
function validateUserId(userId: string): void {
  if (!userId || typeof userId !== 'string' || userId.trim() === '') {
    throw new Error('userId must be a non-empty string');
  }
}

/**
 * Creates a token-based rate limiter for LLM API calls.
 *
 * Implements sliding window rate limiting with support for:
 * - Multiple simultaneous limits (per-minute, per-hour, per-day)
 * - Automatic token extraction from OpenAI and Anthropic responses
 * - Cost tracking and limits
 * - Burst allowances
 * - Threshold callbacks
 * - Custom storage backends (Redis, databases, etc.)
 *
 * @param config - Configuration options
 * @returns Rate limiter instance with methods to wrap calls, check limits, and get stats
 *
 * @example
 * ```typescript
 * const limiter = createLimiter({
 *   limit: 100000,
 *   window: 60 * 60 * 1000,
 *   onThreshold: (userId, percent) => {
 *     console.log(`User ${userId} at ${percent}% usage`);
 *   },
 * });
 *
 * // Wrap LLM calls
 * const response = await limiter.wrap("user-123", () =>
 *   openai.chat.completions.create({
 *     model: "gpt-4",
 *     messages: [{ role: "user", content: "Hello!" }],
 *   })
 * );
 * ```
 */
export function createLimiter(config: LimiterConfig) {
  // Validate configuration
  validateLimiterConfig(config);


  const storage = config.storage ?? new MemoryStorage();
  const thresholds = config.thresholds ?? [80, 90, 100];
  const burstMultiplier = 1 + (config.burstPercent ?? 0) / 100;

  // normalize limits config
  const limits: LimitConfig[] = config.limits ?? [
    { tokens: config.limit ?? 100000, window: config.window ?? 3600000 },
  ];

  // get or create user data
  async function getUserData(userId: string): Promise<UserData> {
    let data = await storage.get(userId);
    if (!data) {
      data = { entries: [], thresholdsTriggered: new Set() };
    }
    return data;
  }

  // clean old entries outside all windows and calculate usage for a specific window
  function getWindowUsage(
    entries: UsageEntry[],
    windowMs: number,
  ): { tokens: number; cost: number } {
    const cutoff = Date.now() - windowMs;
    let tokens = 0;
    let cost = 0;
    for (const entry of entries) {
      if (entry.timestamp >= cutoff) {
        tokens += entry.tokens;
        cost += entry.cost;
      }
    }
    return { tokens, cost };
  }

  // prune old entries that are outside all windows
  function pruneEntries(entries: UsageEntry[]): UsageEntry[] {
    const maxWindow = Math.max(...limits.map((l) => l.window));
    const cutoff = Date.now() - maxWindow;
    return entries.filter((e) => e.timestamp >= cutoff);
  }

  /**
   * Checks if a user is within all configured rate limits.
   * @param userId - Unique identifier for the user
   * @returns true if user is within all limits, false otherwise
   */
  async function check(userId: string): Promise<boolean> {
    validateUserId(userId);
    const data = await getUserData(userId);
    const entries = pruneEntries(data.entries);

    for (const limit of limits) {
      const usage = getWindowUsage(entries, limit.window);
      const effectiveLimit = limit.tokens * burstMultiplier;
      if (usage.tokens >= effectiveLimit) return false;
    }

    // check cost limit if enabled
    if (config.costLimit) {
      const maxWindow = Math.max(...limits.map((l) => l.window));
      const usage = getWindowUsage(entries, maxWindow);
      if (usage.cost >= config.costLimit * burstMultiplier) return false;
    }

    return true;
  }

  /**
   * Gets remaining tokens for the primary (first) configured limit.
   * @param userId - Unique identifier for the user
   * @returns Number of tokens remaining before hitting the limit
   */
  async function getRemainingTokens(userId: string): Promise<number> {
    validateUserId(userId);
    const data = await getUserData(userId);
    const entries = pruneEntries(data.entries);
    const primaryLimit = limits[0];
    const usage = getWindowUsage(entries, primaryLimit.window);
    return Math.max(0, primaryLimit.tokens - usage.tokens);
  }

  /**
   * Gets detailed usage statistics for a user.
   * @param userId - Unique identifier for the user
   * @returns Statistics including tokens used, remaining, cost (if enabled), and reset time
   */
  async function stats(userId: string): Promise<UserStats> {
    validateUserId(userId);
    const data = await getUserData(userId);
    const entries = pruneEntries(data.entries);
    const primaryLimit = limits[0];
    const usage = getWindowUsage(entries, primaryLimit.window);

    const remaining = Math.max(0, primaryLimit.tokens - usage.tokens);
    const percentUsed = (usage.tokens / primaryLimit.tokens) * 100;
    const resetAt = new Date(Date.now() + primaryLimit.window);

    const result: UserStats = {
      tokensUsed: usage.tokens,
      remaining,
      resetAt,
      percentUsed: Math.min(100, percentUsed),
    };

    if (config.trackCost || config.costLimit) {
      result.costUsed = usage.cost;
      result.costRemaining = config.costLimit
        ? Math.max(0, config.costLimit - usage.cost)
        : undefined;
    }

    return result;
  }

  // record usage and check thresholds
  async function recordUsage(
    userId: string,
    tokens: number,
    cost: number,
  ): Promise<void> {
    const data = await getUserData(userId);
    data.entries = pruneEntries(data.entries);
    data.entries.push({ tokens, cost, timestamp: Date.now() });

    // check thresholds and fire callback
    if (config.onThreshold) {
      const primaryLimit = limits[0];
      const usage = getWindowUsage(data.entries, primaryLimit.window);
      const percentUsed = (usage.tokens / primaryLimit.tokens) * 100;

      for (const threshold of thresholds) {
        if (percentUsed >= threshold && !data.thresholdsTriggered.has(threshold)) {
          data.thresholdsTriggered.add(threshold);
          config.onThreshold(userId, threshold);
        }
      }
    }

    await storage.set(userId, data);
  }

  /**
   * Wraps an async LLM API call with automatic rate limiting and token tracking.
   * Tokens are automatically extracted from the response and tracked.
   *
   * @param userId - Unique identifier for the user
   * @param fn - Async function that returns an LLM API response
   * @param options - Optional configuration
   * @param options.throwOnLimit - Throw error if user exceeds limits (default: false)
   * @param options.model - Model name for cost calculation (e.g., "gpt-4", "claude-3-sonnet")
   * @returns The original response from the wrapped function
   * @throws {Error} If throwOnLimit is true and user exceeds limits
   *
   * @example
   * ```typescript
   * // Basic usage
   * const response = await limiter.wrap("user-123", () =>
   *   openai.chat.completions.create({ ... })
   * );
   *
   * // With cost tracking
   * const response = await limiter.wrap(
   *   "user-123",
   *   () => anthropic.messages.create({ ... }),
   *   { model: "claude-3-sonnet", throwOnLimit: true }
   * );
   * ```
   */
  async function wrap<T>(
    userId: string,
    fn: () => Promise<T>,
    options?: { throwOnLimit?: boolean; model?: string }
  ): Promise<T> {
    validateUserId(userId);
    const withinLimit = await check(userId);

    if (!withinLimit && options?.throwOnLimit) {
      throw new Error(`rate limit exceeded for user ${userId}`);
    }

    const response = await fn();
    const { input, output } = extractTokens(response);
    const totalTokens = input + output;

    if (totalTokens > 0) {
      const cost = config.trackCost || config.costLimit
        ? calculateCost(input, output, options?.model)
        : 0;
      await recordUsage(userId, totalTokens, cost);
    }

    return response;
  }

  /**
   * Manually adds tokens to a user's usage.
   * Useful for tracking tokens from streaming responses or external sources.
   *
   * @param userId - Unique identifier for the user
   * @param tokens - Number of tokens to add
   * @param cost - Optional cost in USD (for custom cost tracking)
   *
   * @example
   * ```typescript
   * // Track streaming tokens
   * let tokenCount = 0;
   * for await (const chunk of stream) {
   *   tokenCount += estimateTokens(chunk);
   * }
   * await limiter.addTokens("user-123", tokenCount);
   * ```
   */
  async function addTokens(
    userId: string,
    tokens: number,
    cost = 0,
  ): Promise<void> {
    validateUserId(userId);
    // Ignore non-positive token additions
    if (tokens < 0) {
      throw new Error("Tokens to add must be non-negative.");
    }
    if (cost < 0) {
      throw new Error("Cost to add must be non-negative.");
    }
    await recordUsage(userId, tokens, cost);
  }

  /**
   * Resets a user's usage data, clearing all tracked tokens and costs.
   * @param userId - Unique identifier for the user
   */
  async function reset(userId: string): Promise<void> {
    validateUserId(userId);
    await storage.delete(userId);
  }

  return { wrap, check, stats, getRemainingTokens, addTokens, reset };
}

/**
 * Express middleware for rate limiting API routes.
 * Returns 429 status with usage details when limits are exceeded.
 *
 * @param limiter - Rate limiter instance from createLimiter()
 * @param getUserId - Function to extract user ID from request (return null to skip limiting)
 * @returns Express middleware function
 *
 * @example
 * ```typescript
 * const limiter = createLimiter({ limit: 50000, window: 3600000 });
 *
 * app.use("/api/chat",
 *   expressMiddleware(limiter, (req) => req.user?.id ?? null)
 * );
 * ```
 */
export function expressMiddleware(
  limiter: ReturnType<typeof createLimiter>,
  getUserId: (req: unknown) => string | null
) {
  return async (req: unknown, res: unknown, next: () => void) => {
    const userId = getUserId(req);
    if (!userId) return next();

    const withinLimit = await limiter.check(userId);
    if (!withinLimit) {
      const stats = await limiter.stats(userId);
      const response = res as { status: (code: number) => { json: (body: unknown) => void } };
      return response.status(429).json({
        error: "rate limit exceeded",
        resetAt: stats.resetAt,
        tokensUsed: stats.tokensUsed,
      });
    }
    next();
  };
}

/**
 * Next.js API route middleware helper for rate limiting.
 * Returns a response object when limits are exceeded.
 *
 * @param limiter - Rate limiter instance from createLimiter()
 * @param getUserId - Function to extract user ID from request (return null to skip limiting)
 * @returns Async function that returns {allowed, response?}
 *
 * @example
 * ```typescript
 * const limiter = createLimiter({ limit: 50000, window: 3600000 });
 * const checkLimit = nextMiddleware(limiter,
 *   (req) => req.headers.get("x-user-id")
 * );
 *
 * export async function POST(req: Request) {
 *   const { allowed, response } = await checkLimit(req);
 *   if (!allowed) return response;
 *
 *   // Proceed with LLM call...
 * }
 * ```
 */
export function nextMiddleware(
  limiter: ReturnType<typeof createLimiter>,
  getUserId: (req: unknown) => string | null
) {
  return async (req: unknown): Promise<{ allowed: boolean; response?: Response }> => {
    const userId = getUserId(req);
    if (!userId) return { allowed: true };

    const withinLimit = await limiter.check(userId);
    if (!withinLimit) {
      const stats = await limiter.stats(userId);
      return {
        allowed: false,
        response: new Response(
          JSON.stringify({
            error: "rate limit exceeded",
            resetAt: stats.resetAt,
            tokensUsed: stats.tokensUsed,
          }),
          { status: 429, headers: { "Content-Type": "application/json" } }
        ),
      };
    }
    return { allowed: true };
  };
}

export default createLimiter;
