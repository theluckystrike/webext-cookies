[![CI](https://github.com/theluckystrike/webext-cookies/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-cookies/actions)
[![npm](https://img.shields.io/npm/v/@theluckystrike/webext-cookies)](https://www.npmjs.com/package/@theluckystrike/webext-cookies)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

# webext-cookies

Promise-based wrapper for Chrome Cookies API.

## Installation

```bash
npm install webext-cookies
```

## Usage

```typescript
import { WebExtCookies } from 'webext-cookies';

const cookie = await WebExtCookies.get({ name: 'session', url: 'https://example.com' });
```

## License

MIT

---

Built by [theluckystrike](https://github.com/theluckystrike) — [zovo.one](https://zovo.one)
