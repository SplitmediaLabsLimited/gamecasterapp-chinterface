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
    clientId: '',
    channel: 'oyed',
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
