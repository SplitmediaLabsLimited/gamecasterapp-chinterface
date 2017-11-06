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
    channel: 'oyed', // Twitch channel to join (required; see getUser() below)
    reconnect: false, // Defaults to true
    // Optional, required for sending/writing messages.
    username: 'oyed',
    accessToken: 'as545trdsFdgghNXoyit83nguf11gpOx',
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
     * {string} body - The processed message, with <img> tags for emotes.
     * {string} raw - The unprocessed message, direct from the service.
     * {number} timestamp - The time in milliseconds.
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
Chinterface provides a set of unique events and functions that assist in the display and handling of messages for Twitch.

### Fetch and Set Twitch User Information
In cases where you do not know the `userId`, `channel` or `username`, you can use the `getUser()` function to set the config for you.

Requires `clientId` and `accessToken`. This function will NOT overwrite any previously set properties.

```
Chat.service('twitch').getUser().then(() => {
    // Connect to chat
    // Get badges
}).catch(() => {
    console.log('Could not fetch user data.');
});
```

### Accessing TMI Events
Chinterface provides a clean wrapper to directly access TMI Events. This is useful when you want to listen to clearchat, timeouts or bans. https://docs.tmijs.org/v1.2.1/Events.html

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
It's common to output a user's associated badges when displaying a message. You may use the `getBadges()` function to return a list of badges and respective URLs for the connected channel.

Requires `clientId` and `userId`. If you do not know the user ID, make a request to `getUser()` first.

```
// Get all badges for all connected Twitch channels
Chat.service('twitch').getBadges().then(data => {
    console.log('Successfully fetched all channel badges.', data);
});
```