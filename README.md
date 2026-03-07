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

---
built by [zovo.one](https://zovo.one)
