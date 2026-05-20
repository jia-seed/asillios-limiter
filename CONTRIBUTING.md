# Contributing to asillios-limiter

Thanks for your interest in contributing! This document outlines how to get started.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/asillios-limiter.git
   cd asillios-limiter
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Development

### Build

```bash
npm run build
```

### Watch mode

```bash
npm run dev:web
```

### Type checking

```bash
npm run typecheck
```

## Making Changes

1. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes in the `src/` directory

3. Run typecheck to ensure no type errors:
   ```bash
   npm run typecheck
   ```

4. Build to verify everything compiles:
   ```bash
   npm run build
   ```

## Submitting a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a pull request against the `main` branch

3. Describe what your changes do and why

4. Link any related issues

## Code Style

- Use TypeScript for all new code
- Keep functions small and focused
- Add types for all function parameters and return values
- Use meaningful variable and function names

## Reporting Issues

When reporting bugs, please include:

- Node.js version
- Steps to reproduce
- Expected vs actual behavior
- Any error messages

## Questions?

Open an issue if you have questions or need help getting started.
