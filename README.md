# Chinterface (Chat Interface)

A unified interface for Chats around the world.

## Services Supported

- Twitch (Read/Write)

## Planned Services

- YouTube
- Facebook Live
- Dailymotion
- Hitbox
- Beam

## Setup

```js
// Twitch.
Chat.service('twitch').setConfig({
    clientId: '', // Twitch Application Client ID (required)
    channel: 'oyed', // Twitch channel to connect to (required if oauth not provided)
    userId: '', // Twitch User ID (required if oauth not provided)
    reconnect: false, // Defaults to true
    // Optional, required for sending/writing messages.
    username: '',
    accessToken: '',
});
```

## Usage

```js
// Bind Events to the specific Interface (E.g. "twitch").
Chat.service('twitch').on('message', data => {
    /**
     * `data` will always return the following structure:
     *
     * {string} username
     * {string} body
     * {string} raw - The unprocessed message, direct from the service
     * {number} timestamp - Can be null, depends on whether the service provides
     *     this information.
     * {Object} extra - Service-specific information.
     */
    console.log('New Message', data);
});

// Connect the specific service.
Chat.service('twitch').connect().then(() => {
    console.log('Successfully connected to Twitch');

    // If the Interface supports writing, you can write messages like this.
    // This will return a Promise.
    Chat.service('twitch').send('Test Message');
}).catch(() => {
    console.log('Could not connect to Twitch');
});
```


## Twitch
Chinterface provides a set of unique events and functions that assist in the
display and handling of messages for Twitch.

### Accessing TMI Events
Chinterface provides a clean wrapper to directly access TMI Events. This is useful when you
want to listen to clearchat, timeouts or bans.

This method is chainable.

```
Chat.service('twitch').clientOn('timeout', (channel, username, reason, duration) => {
    // Remove all messages for the given channel and username
});

Chat.service('twitch').clientOn('ban', (channel, username, reason) => {
    // Remove all messages for the given channel and username
]);

Chat.service('twitch').clientOn('clearchat', channel => {
    // Remove all messages for the given channel
});
```

### Badges
It's common to output a user's associated badges when displaying a message. You may
use the `getBadges()` function to return a list of badges and respective URLs for the
connected channel.

```
// Get all badges for all connected Twitch channels
Chat.service('twitch').getBadges().then(badges => {
    console.log('Successfully fetched all channel badges.', badges);
});
```