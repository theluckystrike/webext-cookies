[![CI](https://github.com/theluckystrike/webext-cookies/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-cookies/actions)
[![npm](https://img.shields.io/npm/v/@theluckystrike/webext-cookies)](https://www.npmjs.com/package/@theluckystrike/webext-cookies)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![npm bundle size](https://img.shields.io/bundlejs/size/@theluckystrike/webext-cookies)](https://bundlejs.com/?q=@theluckystrike/webext-cookies)

# webext-cookies

> Promise-based, fully typed wrapper for the Chrome Cookies API

## Why webext-cookies?

The raw `chrome.cookies` API is:
- **Callback-based** — no Promise/async-await support
- **Untyped** — no TypeScript IntelliSense
- **Verbose** — repetitive Promise wrapping boilerplate

`webext-cookies` solves all of these:

```typescript
// ❌ Raw Chrome API (callback-based, untyped)
chrome.cookies.get({ name: 'session', url: 'https://example.com' }, (cookie) => {
  console.log(cookie);
});

// ✅ webext-cookies (promise-based, fully typed)
import { WebExtCookies } from '@theluckystrike/webext-cookies';

const cookie = await WebExtCookies.get({ name: 'session', url: 'https://example.com' });
console.log(cookie);
```

## Installation

```bash
npm install @theluckystrike/webext-cookies
```

Or with pnpm:
```bash
pnpm add @theluckystrike/webext-cookies
```

Or with yarn:
```bash
yarn add @theluckystrike/webext-cookies
```

## Quick Start

### Get a single cookie

```typescript
import { WebExtCookies } from '@theluckystrike/webext-cookies';

// Get a specific cookie by name and URL
const cookie = await WebExtCookies.get({
  name: 'session_id',
  url: 'https://example.com'
});

if (cookie) {
  console.log(`Cookie value: ${cookie.value}`);
  console.log(`Domain: ${cookie.domain}`);
  console.log(`Secure: ${cookie.secure}`);
}
```

### Get all cookies

```typescript
// Get all cookies for a domain
const cookies = await WebExtCookies.getAll({
  domain: '.example.com'
});

// Get all cookies (across all domains)
const allCookies = await WebExtCookies.getAll();

// Filter by additional criteria
const secureCookies = await WebExtCookies.getAll({
  secure: true,
  session: false
});
```

### Set a cookie

```typescript
// Create or update a cookie
const newCookie = await WebExtCookies.set({
  url: 'https://example.com',
  name: 'user_preference',
  value: 'dark_mode',
  domain: '.example.com',
  path: '/',
  secure: true,
  sameSite: 'strict'
});

console.log('Cookie created:', newCookie?.name);
```

### Remove a cookie

```typescript
// Delete a cookie by name and URL
const removed = await WebExtCookies.remove({
  name: 'session_id',
  url: 'https://example.com'
});

if (removed) {
  console.log(`Cookie "${removed.name}" was removed`);
}
```

### Listen for cookie changes

```typescript
// Subscribe to cookie changes
WebExtCookies.onChanged((changeInfo) => {
  const { removed, cause, cookie } = changeInfo;
  
  if (removed) {
    console.log(`Cookie "${cookie.name}" was removed (cause: ${cause})`);
  } else {
    console.log(`Cookie "${cookie.name}" was set (value: ${cookie.value})`);
  }
});

// Stop listening
function handleChange(changeInfo: chrome.cookies.CookieChangeInfo) {
  console.log('Cookie changed:', changeInfo);
}

WebExtCookies.onChanged(handleChange);

// Later, remove the listener
WebExtCookies.offChanged(handleChange);
```

### Get all cookie stores

```typescript
// List all cookie stores (useful for multi-profile browsers)
const stores = await WebExtCookies.getAllCookieStores();

stores.forEach((store) => {
  console.log(`Store ${store.id}:`);
  store.tabIds.forEach((tabId) => console.log(`  - Tab ${tabId}`));
});
```

## API Reference

| Method | Signature | Description |
|--------|-----------|-------------|
| `get` | `get(details: { name: string; url: string; storeId?: string })` | Retrieves a single cookie by name and URL |
| `getAll` | `getAll(details?: GetAllDetails)` | Retrieves all cookies matching the given criteria |
| `set` | `set(details: SetDetails)` | Creates or updates a cookie |
| `remove` | `remove(details: { name: string; url: string; storeId?: string })` | Deletes a cookie by name and URL |
| `getAllCookieStores` | `getAllCookieStores()` | Lists all existing cookie stores |
| `onChanged` | `onChanged(callback: (changeInfo: CookieChangeInfo) => void)` | Subscribes to cookie change events |
| `offChanged` | `offChanged(callback: (changeInfo: CookieChangeInfo) => void)` | Unsubscribes from cookie change events |

### Type Definitions

All method parameters and return types are fully typed using Chrome's `cookies` API types. Import them from `@theluckystrike/webext-cookies`:

```typescript
import type { 
  Cookie, 
  GetAllDetails, 
  SetDetails, 
  CookieChangeInfo,
  CookieStore 
} from '@theluckystrike/webext-cookies';
```

## Permissions

To use this library, add the `cookies` permission to your `manifest.json`:

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

**Note:** You'll also need to specify host permissions for any domains you want to access cookies on.

## Part of @zovo/webext

`webext-cookies` is part of the `@zovo/webext` ecosystem — a collection of promise-based, fully typed wrappers for Chrome/Firefox extension APIs.

Check out our other packages:

- [@zovo/webext-storage](https://github.com/theluckystrike/webext-storage) — Promise-based storage API wrapper
- [@zovo/webext-tabs](https://github.com/theluckystrike/webext-tabs) — Promise-based tabs API wrapper
- [@zovo/webext-runtime](https://github.com/theluckystrike/webext-runtime) — Promise-based runtime API wrapper

## License

MIT

---

Built by [theluckystrike](https://github.com/theluckystrike) — [zovo.one](https://zovo.one)
