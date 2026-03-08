<div align="center">

# @zovo/webext-cookies

Promise-based, fully typed wrapper for the Chrome Cookies API. Get, set, remove, and watch cookies with async/await.

[![npm version](https://img.shields.io/npm/v/@zovo/webext-cookies)](https://www.npmjs.com/package/@zovo/webext-cookies)
[![npm downloads](https://img.shields.io/npm/dm/@zovo/webext-cookies)](https://www.npmjs.com/package/@zovo/webext-cookies)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@zovo/webext-cookies)

[Installation](#installation) · [Quick Start](#quick-start) · [API](#api) · [License](#license)

</div>

---

## Features

- **Promise-based** -- async/await for all cookie operations
- **Fully typed** -- TypeScript generics for cookie details and responses
- **CRUD operations** -- `get`, `getAll`, `set`, `remove`
- **Cookie stores** -- enumerate all cookie stores
- **Change listeners** -- subscribe to cookie changes with `onChanged`
- **Zero dependencies** -- just TypeScript and the Chrome API

## Installation

```bash
npm install @zovo/webext-cookies
```

<details>
<summary>Other package managers</summary>

```bash
pnpm add @zovo/webext-cookies
# or
yarn add @zovo/webext-cookies
```

</details>

## Quick Start

```typescript
import { WebExtCookies } from "@zovo/webext-cookies";

const session = await WebExtCookies.get({ name: "session", url: "https://example.com" });
const all = await WebExtCookies.getAll({ domain: ".example.com" });

await WebExtCookies.set({
  name: "prefs",
  value: "dark-mode=true",
  url: "https://example.com",
  secure: true,
});

await WebExtCookies.remove({ name: "session", url: "https://example.com" });

WebExtCookies.onChanged((info) => {
  console.log(info.removed ? "removed" : "changed", info.cookie.name);
});
```

## API

| Method | Description |
|--------|-------------|
| `get(details)` | Retrieve a single cookie by name and URL |
| `getAll(details?)` | Retrieve all matching cookies |
| `set(details)` | Set a cookie |
| `remove(details)` | Delete a cookie by name and URL |
| `getAllCookieStores()` | List all cookie stores |
| `onChanged(callback)` | Listen for cookie changes |
| `offChanged(callback)` | Remove a change listener |

## Permissions

```json
{
  "permissions": ["cookies"],
  "host_permissions": ["*://*.example.com/"]
}
```

## Part of @zovo/webext

This package is part of the [@zovo/webext](https://github.com/theluckystrike) family -- typed, modular utilities for Chrome extension development:

| Package | Description |
|---------|-------------|
| [webext-storage](https://github.com/theluckystrike/webext-storage) | Typed storage with schema validation |
| [webext-messaging](https://github.com/theluckystrike/webext-messaging) | Type-safe message passing |
| [webext-tabs](https://github.com/theluckystrike/webext-tabs) | Tab query helpers |
| [webext-cookies](https://github.com/theluckystrike/webext-cookies) | Promise-based cookies API |
| [webext-i18n](https://github.com/theluckystrike/webext-i18n) | Internationalization toolkit |

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License -- see [LICENSE](LICENSE) for details.

---

<div align="center">

Built by [theluckystrike](https://github.com/theluckystrike) · [zovo.one](https://zovo.one)

</div>
