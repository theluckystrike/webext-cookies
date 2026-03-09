[![CI](https://github.com/theluckystrike/webext-cookies/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-cookies/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@zovo/webext-cookies)](https://www.npmjs.com/package/@zovo/webext-cookies)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@zovo/webext-cookies)

# @zovo/webext-cookies

Promise-based, fully typed wrapper for the Chrome Cookies API — get, set, remove, and watch cookies. Part of @zovo/webext.

## Why @zovo/webext-cookies?

The raw `chrome.cookies` API has several pain points:

- **Callback-based**: Uses old-school callbacks instead of modern Promises
- **Untyped**: No TypeScript support out of the box
- **Verbose**: Requires boilerplate for every API call
- **Error-prone**: Easy to make mistakes with cookie details

`@zovo/webext-cookies` solves all these issues:

```typescript
// ❌ Raw chrome.cookies API (verbose, callback-based, untyped)
chrome.cookies.get({ name: 'session', url: 'https://example.com' }, (cookie) => {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
    return;
  }
  console.log(cookie);
});

// ✅ @zovo/webext-cookies (clean, Promise-based, fully typed)
import { WebExtCookies } from '@zovo/webext-cookies';

const cookie = await WebExtCookies.get({ name: 'session', url: 'https://example.com' });
```

## Installation

```bash
npm install @zovo/webext-cookies
```

Or with pnpm:

```bash
pnpm add @zovo/webext-cookies
```

Or with yarn:

```bash
yarn add @zovo/webext-cookies
```

## Quick Start

```typescript
import { WebExtCookies } from '@zovo/webext-cookies';

// Get a single cookie by name and URL
const session = await WebExtCookies.get({ name: 'session', url: 'https://example.com' });

// Get all cookies for a domain
const cookies = await WebExtCookies.getAll({ domain: '.example.com' });

// Set a new cookie
const newCookie = await WebExtCookies.set({
  name: 'preferences',
  value: 'dark-mode=true',
  url: 'https://example.com',
  expirationDate: Math.floor(Date.now() / 1000) + 86400 * 30, // 30 days
  secure: true,
  sameSite: 'strict'
});

// Remove a cookie
await WebExtCookies.remove({ name: 'session', url: 'https://example.com' });

// Listen for cookie changes
WebExtCookies.onChanged((changeInfo) => {
  console.log(`Cookie ${changeInfo.removed ? 'removed' : 'changed'}:`, changeInfo.cookie.name);
});

// Remove listener when done
const listener = (changeInfo: chrome.cookies.CookieChangeInfo) => {};
WebExtCookies.onChanged(listener);
WebExtCookies.offChanged(listener);
```

## API Reference

| Method | Signature | Description |
|--------|-----------|-------------|
| `get` | `get(details: { name: string; url: string; storeId?: string })` | Retrieves a single cookie by name and URL |
| `getAll` | `getAll(details?: chrome.cookies.GetAllDetails)` | Retrieves all cookies matching the given details |
| `set` | `set(details: chrome.cookies.SetDetails)` | Sets a cookie with the given details |
| `remove` | `remove(details: { name: string; url: string; storeId?: string })` | Deletes a cookie by name and URL |
| `getAllCookieStores` | `getAllCookieStores()` | Lists all existing cookie stores |
| `onChanged` | `onChanged(callback: (changeInfo: chrome.cookies.CookieChangeInfo) => void)` | Registers a listener for cookie changes |
| `offChanged` | `offChanged(callback: (changeInfo: chrome.cookies.CookieChangeInfo) => void)` | Removes a cookie change listener |

## Permissions

This library requires the `cookies` permission and host permissions in your `manifest.json`:

```json
{
  "permissions": [
    "cookies"
  ],
  "host_permissions": [
    "*://*.example.com/"
  ]
}
```

The `url` parameter in cookie methods must match a host permission.

## Part of @zovo/webext

`@zovo/webext-cookies` is part of the @zovo/webext family of libraries for browser extension development:

- [@zovo/webext-cookies](https://github.com/theluckystrike/webext-cookies) — Cookies API
- [@zovo/webext-storage](https://github.com/theluckystrike/webext-storage) — Storage API
- [@zovo/webext-tabs](https://github.com/theluckystrike/webext-tabs) — Tabs API
- [@zovo/webext-runtime](https://github.com/theluckystrike/webext-runtime) — Runtime API

## License

MIT License — see [LICENSE](LICENSE) for details.

---

Built with ❤️ by [theluckystrike](https://github.com/theluckystrike) — [zovo.one](https://zovo.one)
