# Contributing to webext-cookies

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/webext-cookies.git
   cd webext-cookies
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

   This project uses [pnpm](https://pnpm.io/) for package management.

## Development Workflow

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Make your changes** — ensure your code follows the existing style

3. **Run tests:**
   ```bash
   pnpm test
   ```

   We use [Vitest](https://vitest.dev/) for testing.

4. **Build the project:**
   ```bash
   pnpm build
   ```

   This compiles TypeScript to JavaScript in the `dist/` directory.

## Code Style

- Use TypeScript for all new code
- Follow the existing code formatting (Prettier/ESLint if configured)
- Add JSDoc comments for public APIs
- Write tests for new functionality

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `refactor:` — code refactoring
- `test:` — adding/updating tests

Example:
```
feat: add getAllCookieStores method
```

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass (`pnpm test`)
3. Ensure the build succeeds (`pnpm build`)
4. Push your branch to your fork
5. Open a Pull Request against the `main` branch
6. Fill out the PR template with all relevant details

## Getting Help

- Open an [Issue](https://github.com/theluckystrike/webext-cookies/issues) for bugs or feature requests
- Check existing issues before creating new ones

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
