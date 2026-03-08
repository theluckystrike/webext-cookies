# Contributing to @zovo/webext-cookies

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

### 1. Fork the Repository

Click the "Fork" button on the [GitHub repository](https://github.com/theluckystrike/webext-cookies).

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/webext-cookies.git
cd webext-cookies
```

### 3. Install Dependencies

We use pnpm for package management:

```bash
npm install -g pnpm  # if you don't have pnpm installed
pnpm install
```

### 4. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

## Development Workflow

### Running Tests

```bash
pnpm test
```

### Building

```bash
pnpm build
```

### Type Checking

```bash
pnpm typecheck
```

## Pull Request Checklist

Before submitting your PR, ensure:

- [ ] Tests pass (`pnpm test`)
- [ ] Code builds without errors (`pnpm build`)
- [ ] TypeScript types are correct
- [ ] New exports are properly typed
- [ ] README is updated if adding new public methods
- [ ] Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/)

## Code Style

- Use TypeScript with strict mode
- Follow existing code conventions
- Add JSDoc comments for public APIs
- Write tests for new functionality

## Questions?

If you have questions, feel free to open an issue or reach out via [GitHub Discussions](https://github.com/theluckystrike/webext-cookies/discussions).
