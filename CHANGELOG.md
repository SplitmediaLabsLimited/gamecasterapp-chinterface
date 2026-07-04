# Chinterface — Change Log

Track notable changes here by date. Newest entries first.

---

## 2026-07-04

### Package version

- **`package.json`** — Version bump `3.0.8` → `3.0.9` (rebuild/publish required for consumers such as stream-chat).

### Debug logging

- **`src/chat.js`** — After a service instance is created, log `[CHINTERFACE] [CHAT SERVICE READY]` with the service name. Helps bracket constructor logs (e.g. `[YOUTUBELIVE CONSTRUCTED]`) from stream-chat code that runs immediately afterward.

### Notes (no code change today)

- Access-token debug output still uses **`log.redactToken()`** in interface trace logs (partial redaction: first 6 + last 4 chars). A full redaction change was considered and reverted.
- Facebook default Graph API version remains **`v25.0`** in `src/interfaces/facebook.js` (unchanged today; stream-chat was updated to match).

---

## How to use this log

- Add a new dated section at the top for each day or release batch.
- Keep bullets short: **file or area** — what changed and why (one line when possible).
- After source changes, run `yarn build` and bump the dependency in downstream apps (e.g. stream-chat `package.json`).

### Enabling debug logs

Set `window.DEBUGLOG = true` (or use `log.enable()` from `src/utils/logger.js`). Trace output is prefixed with `[CHINTERFACE]`.
