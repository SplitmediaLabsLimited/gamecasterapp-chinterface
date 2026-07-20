# Chinterface — Change Log

Track notable changes here by date. Newest entries first.

---

## 2026-07-20

### YouTube super-chat payload (`3.0.11`)

- **`src/utils/youtube-super-chat.js`** — New helper to build nested `super-chat` event payloads with `id`, `publishedAt`, `type`, `author`, and `superChat` fields.
- **`src/interfaces/youtube.js`** — `super-chat` now emits the nested payload instead of flat `superChatDetails`. Added `superStickerEvent` handling on the same event name.
- **`src/utils/youtube-proto-mapper.js`** — Map `superStickerDetails` from YouTube Live stream protobuf messages so super stickers work on `youtubeLive`.
- **`README.md`** — Updated `super-chat` listener documentation for YouTube and YouTube Live.

**Breaking change:** Existing `super-chat` listeners that read flat fields (e.g. `data.userComment`) must use the nested shape (e.g. `data.superChat.userComment`, `data.author.displayName`).

---

## 2026-07-07

### Debug logging

- **`src/interfaces/twitch.js`** — Added structured `log.trace('TWITCH', …)` tracing across the Twitch service lifecycle: construct, connect/disconnect, TMI events (`connected`, `disconnected`, `reconnect`, `notice`), message emit, send, listener add/remove, `clientOn`, `setConfig`, `loadUser`, `getBadges`, and Helix `api` request/response/error. Access tokens are redacted via `log.redactToken()`. Connect failures now reject the connect promise with a logged error.

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
