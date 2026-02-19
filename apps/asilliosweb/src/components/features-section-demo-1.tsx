'use client';

import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Highlight, themes } from "prism-react-renderer";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
import ShinyText from "./ShinyText";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Simple Integration",
      description:
        "Wrap your LLM calls with minimal code. Auto-detects OpenAI and Anthropic formats.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-1 lg:col-span-4 border-b md:border-r lg:border-r border-neutral-800",
    },
    {
      title: "Per-User Tracking",
      description:
        "Scale monitoring per user. Set limits, get alerts, identify usage patterns.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-1 lg:col-span-2 border-b border-neutral-800",
    },
    {
      title: "Smart Alerts",
      description:
        "Get notified at 80%, 90%, 100% usage. Custom callbacks for billing integration.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-1 lg:col-span-3 border-b md:border-b lg:border-b-0 md:border-r lg:border-r border-neutral-800",
    },
    {
      title: "Scale Ready",
      description:
        "Production-ready with Redis support. Scale from prototype to enterprise.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-1 lg:col-span-3 border-neutral-800",
    },
  ];
  const [copied, setCopied] = React.useState(false);
  const [promptCopied, setPromptCopied] = React.useState(false);
  const [starCount, setStarCount] = React.useState<number | null>(null);

  // Fetch GitHub star count
  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch('/api/github/stars', { cache: 'no-store' });
        const data = await response.json();
        if (data.stars !== null) {
          setStarCount(data.stars);
        }
      } catch (error) {
        console.error('Failed to fetch star count:', error);
      }
    }
    fetchStars();
    // Refresh star count every 30 seconds
    const interval = setInterval(fetchStars, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install asillios-limiter');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const claudePrompt = `Add rate limiting to my app using asillios-limiter. Install it (ex. npm install asillios-limiter) Use limiter.wrap() to track token usage from OpenAI or Anthropic. Scale safely. Docs at asillios.com.`;

  const handlePromptCopy = () => {
    navigator.clipboard.writeText(claudePrompt);
    setPromptCopied(true);
    setTimeout(() => setPromptCopied(false), 2000);
  };

  return (
    <div className="relative z-20 max-w-7xl mx-auto pb-20">
      {/* Navbar */}
      <div className="sticky top-4 z-50 flex justify-center px-4">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="nav"
          className="dark:bg-black bg-black text-white px-6 py-2 flex items-center gap-6"
        >
          <a href="/" className="font-medium text-sm hover:text-neutral-300 transition-colors">Asillios</a>
          <div className="h-4 w-px bg-neutral-700" />
          <button onClick={() => document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' })} className="text-neutral-400 hover:text-white transition-colors text-sm">Install</button>
          <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-neutral-400 hover:text-white transition-colors text-sm">Features</button>
          <button onClick={() => document.getElementById('quickstart')?.scrollIntoView({ behavior: 'smooth' })} className="text-neutral-400 hover:text-white transition-colors text-sm">Quickstart</button>
        </HoverBorderGradient>
      </div>

      <div className="pt-16 pb-12 md:pt-20 lg:pt-32 lg:pb-16 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium mb-6">
              <ShinyText text="Asillios" speed={3} />
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 font-normal leading-snug mb-4">
              Scale your LLM app safely - no surprise API bills.
            </p>

            <p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed mb-4">
              Open source TypeScript library for per-user rate limiting and cost control. Scale with confidence.
            </p>

            <a href="https://www.npmjs.com/package/asillios-limiter" target="_blank" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors mb-8 block">
              215+ downloads on npm
            </a>

            <div id="install" className="flex flex-col sm:flex-row items-center gap-4 mb-8 scroll-mt-20">
              <div
                onClick={handleCopy}
                className="inline-flex items-center gap-3 bg-teal-900 hover:bg-teal-800 border border-teal-700 hover:border-teal-500 text-white px-6 py-3 rounded-lg font-mono text-sm cursor-pointer transition-all relative overflow-hidden"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  backgroundBlendMode: 'overlay',
                }}
              >
                <span>npm install asillios-limiter</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                >
                  {copied ? (
                    <path d="M20 6L9 17l-5-5" />
                  ) : (
                    <>
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </>
                  )}
                </svg>
              </div>

              <HoverBorderGradient
                containerClassName="rounded-full"
                as="a"
                href="https://github.com/audgeviolin07/asillios-limiter"
                target="_blank"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
              >
                <GitHubLogo />
                <span>Star on GitHub</span>
                {starCount !== null && (
                  <span className="text-base font-medium">
                    ⭐ {starCount}
                  </span>
                )}
              </HoverBorderGradient>
            </div>

            {/* Claude Code Prompt */}
            <div>
              <p className="text-neutral-500 text-xs mb-3">Copy this prompt to add rate limiting with Claude Code, Cursor, or any other AI assistant.</p>
              <div
                onClick={handlePromptCopy}
                className="relative bg-neutral-900 border border-neutral-800 rounded-lg p-4 cursor-pointer hover:border-teal-600 transition-colors group"
              >
                <p className="text-neutral-400 text-sm pr-8 leading-relaxed">
                  {claudePrompt}
                </p>
                <div className="absolute top-3 right-3 text-neutral-500 group-hover:text-white transition-colors">
                  {promptCopied ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Greek Image */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/greek.png"
              alt="Asillios sanctuary - scale your LLM applications safely without unexpected API costs"
              width={400}
              height={400}
              priority
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 400px"
              className="opacity-80 w-48 h-48 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px]"
            />
            <p className="text-xs md:text-sm text-neutral-500 text-center mt-4 md:mt-6 max-w-xs md:max-w-sm leading-relaxed px-4 md:px-0">
              From Greek <em className="text-neutral-200 not-italic">ásylon</em> - a <span className="text-neutral-200">sacred refuge</span>. <span className="text-neutral-200">Asillios</span> is your app&apos;s <span className="text-neutral-200">sanctuary</span> from unexpected API costs.
            </p>
          </div>
        </div>
      </div>

      <div id="features" className="relative scroll-mt-20 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-medium text-white text-center mb-8">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 mt-6 border rounded-md border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>

      {/* Code Examples Section */}
      <div id="quickstart" className="mt-20 px-4 md:px-8 space-y-8 scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-medium text-white text-center mb-12">Quick Start Guide</h2>

        <CodeBlock
          title="Basic Setup"
          code={`import { createLimiter } from "asillios-limiter";

const limiter = createLimiter({
  limit: 100000, // 100k tokens per window
  window: 60 * 60 * 1000, // 1 hour
  thresholds: [80, 90, 100],
  onThreshold: (userId, percent) => {
    console.log(\`user \${userId} hit \${percent}% of their limit\`);
  },
});`}
        />

        <CodeBlock
          title="Wrap your LLM calls"
          code={`// Works with OpenAI
const response = await limiter.wrap("user-123", async () => {
  return openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: "hello" }],
  });
});

// Works with Anthropic too
const response = await limiter.wrap("user-123", async () => {
  return anthropic.messages.create({
    model: "claude-3-sonnet-20240229",
    max_tokens: 1024,
    messages: [{ role: "user", content: "hello" }],
  });
});`}
        />

        <CodeBlock
          title="Check usage and stats"
          code={`// Check if user can make more requests
const canProceed = await limiter.check("user-123");

// Get detailed stats
const stats = await limiter.stats("user-123");
console.log(stats);
// { tokensUsed: 150, remaining: 99850, resetAt: Date, percentUsed: 0.15 }

// Manually add tokens (useful for streaming)
await limiter.addTokens("user-123", 500);

// Reset a user's usage
await limiter.reset("user-123");`}
        />

        <CodeBlock
          title="Custom Storage (Redis example)"
          code={`import { createLimiter, StorageAdapter, UserData } from "asillios-limiter";

class RedisStorage implements StorageAdapter {
  async get(userId: string): Promise<UserData | null> {
    const data = await redis.get(\`limiter:\${userId}\`);
    if (!data) return null;
    const parsed = JSON.parse(data);
    return {
      ...parsed,
      resetAt: new Date(parsed.resetAt),
      thresholdsTriggered: new Set(parsed.thresholdsTriggered),
    };
  }

  async set(userId: string, data: UserData): Promise<void> {
    await redis.set(\`limiter:\${userId}\`, JSON.stringify({
      ...data,
      thresholdsTriggered: [...data.thresholdsTriggered],
    }));
  }

  async delete(userId: string): Promise<void> {
    await redis.del(\`limiter:\${userId}\`);
  }
}

const limiter = createLimiter({
  limit: 100000,
  window: 60 * 60 * 1000,
  storage: new RedisStorage(),
});`}
        />
      </div>

    </div>
  );
}

const CodeBlock = ({ title, code }: { title: string; code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-neutral-800 bg-[#0d1117]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-neutral-800">
        <span className="text-sm text-neutral-400">{title}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-teal-700/30"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <Highlight theme={themes.nightOwl} code={code} language="typescript">
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className="p-4 overflow-x-auto text-sm" style={{ ...style, background: 'transparent' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="inline-block w-8 text-neutral-600 select-none text-right mr-4">{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex py-6 h-full items-start justify-center">
      <div className="text-center w-full px-4">
        <div className="text-4xl md:text-6xl font-mono text-white mb-2">{progress}%</div>
        <div className="w-full max-w-[200px] md:max-w-[280px] mx-auto h-3 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-500 rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-neutral-600 text-xs mt-2">tokens used this window</div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const users = [
    { id: 'user-a', usage: 85, shade: 'bg-teal-500' },
    { id: 'user-b', usage: 42, shade: 'bg-teal-700' },
    { id: 'user-c', usage: 91, shade: 'bg-teal-400' },
    { id: 'user-d', usage: 23, shade: 'bg-teal-800' },
  ];

  return (
    <div className="relative flex flex-col p-4 h-full overflow-hidden">
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-3">
            <span className="text-neutral-500 text-xs font-mono w-16">{user.id}</span>
            <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className={cn("h-full rounded-full", user.shade)}
                initial={{ width: 0 }}
                animate={{ width: `${user.usage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            <span className="text-neutral-400 text-xs font-mono w-8">{user.usage}%</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-10 bg-gradient-to-t from-black to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  const [alerts, setAlerts] = React.useState<{pct: string, shade: string}[]>([]);

  useEffect(() => {
    const thresholds = [
      { pct: '80%', shade: 'bg-teal-900 border-teal-700 text-white' },
      { pct: '90%', shade: 'bg-teal-800 border-teal-600 text-white' },
      { pct: '100%', shade: 'bg-teal-700 border-teal-500 text-white' },
    ];
    let index = 0;
    const interval = setInterval(() => {
      setAlerts(prev => {
        if (prev.length >= 3) return [];
        return [...prev, thresholds[index]];
      });
      index = (index + 1) % 3;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-start p-4 h-[140px] overflow-hidden">
      <div className="space-y-2 w-full">
        {alerts.map((alert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("text-xs font-mono px-3 py-2 rounded border", alert.shade)}
          >
            → user-123 reached {alert.pct} of limit
          </motion.div>
        ))}
        {alerts.length === 0 && (
          <div className="text-neutral-600 text-xs">Waiting for threshold events...</div>
        )}
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-10 bg-gradient-to-t from-black to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.08, 0.55, 0.52],
      glowColor: [0.08, 0.46, 0.43],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

const GitHubLogo = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
};

export default FeaturesSectionDemo;
