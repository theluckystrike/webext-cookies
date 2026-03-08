[![CI](https://github.com/theluckystrike/webext-cookies/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-cookies/actions)
[![npm](https://img.shields.io/npm/v/@theluckystrike/webext-cookies)](https://www.npmjs.com/package/@theluckystrike/webext-cookies)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Last Commit](https://img.shields.io/github/last-commit/theluckystrike/webext-cookies)](https://github.com/theluckystrike/webext-cookies/commits/main)

# webext-cookies

A promise-based wrapper for the Chrome Cookies API (`chrome.cookies`). Simplifies working with browser cookies in Chrome extensions by converting callback-based APIs to clean Promise-based ones.

## Installation

```bash
npm install @theluckystrike/webext-cookies
```

## Usage

```typescript
import { WebExtCookies } from '@theluckystrike/webext-cookies';

// Get a single cookie
const cookie = await WebExtCookies.get({ 
  name: 'session', 
  url: 'https://example.com' 
});

// Get all cookies for a domain
const cookies = await WebExtCookies.getAll({ 
  domain: 'example.com' 
});

// Set a cookie
const newCookie = await WebExtCookies.set({
  name: 'user_pref',
  value: 'dark_mode',
  url: 'https://example.com',
  expirationDate: Math.floor(Date.now() / 1000) + 86400 // 24 hours
});

// Delete a cookie
await WebExtCookies.remove({ 
  name: 'session', 
  url: 'https://example.com' 
});

// Listen for cookie changes
WebExtCookies.onChanged((changeInfo) => {
  console.log(`Cookie ${changeInfo.cause}: ${changeInfo.cookie.name}`);
});
```

## API Reference

### `WebExtCookies.get(details)`

Retrieves information about a single cookie.

| Parameter | Type | Description |
|-----------|------|-------------|
| `details` | `{ name: string; url: string; storeId?: string }` | Cookie details |

Returns: `Promise<chrome.cookies.Cookie | null>`

### `WebExtCookies.getAll(details)`

Retrieves all cookies matching the given criteria.

| Parameter | Type | Description |
|-----------|------|-------------|
| `details` | `chrome.cookies.GetAllDetails` | Filter options (domain, name, path, secure, session, storeId, url) |

Returns: `Promise<chrome.cookies.Cookie[]>`

### `WebExtCookies.set(details)`

Sets a cookie with the given data.

| Parameter | Type | Description |
|-----------|------|-------------|
| `details` | `chrome.cookies.SetDetails` | Cookie properties (name, value, url, domain, path, secure, httpOnly, expirationDate, storeId) |

Returns: `Promise<chrome.cookies.Cookie | null>`

### `WebExtCookies.remove(details)`

Deletes a cookie by name.

| Parameter | Type | Description |
|-----------|------|-------------|
| `details` | `{ name: string; url: string; storeId?: string }` | Cookie details |

Returns: `Promise<{ name: string; url: string; storeId?: string } | null>`

### `WebExtCookies.getAllCookieStores()`

Lists all existing cookie stores.

Returns: `Promise<chrome.cookies.CookieStore[]>`

### `WebExtCookies.onChanged(callback)`

Registers a listener for cookie changes.

| Parameter | Type | Description |
|-----------|------|-------------|
| `callback` | `(changeInfo: chrome.cookies.CookieChangeInfo) => void` | Function called when a cookie is set or removed |

### `WebExtCookies.offChanged(callback)`

Removes a listener for cookie changes.

| Parameter | Type | Description |
|-----------|------|-------------|
| `callback` | `(changeInfo: chrome.cookies.CookieChangeInfo) => void` | The callback to remove |

## Project Structure

```
webext-cookies/
├── src/
│   ├── index.ts          # Main source code
│   └── index.test.ts     # Unit tests
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions CI
├── LICENSE               # MIT License
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Requirements

- Chrome (or Chromium-based browser) extension environment
- TypeScript 5.0+
- `@types/chrome` for type definitions

## License

MIT License — see [LICENSE](LICENSE) for details.

---

Built at [zovo.one](https://zovo.one) by [theluckystrike](https://github.com/theluckystrike)
