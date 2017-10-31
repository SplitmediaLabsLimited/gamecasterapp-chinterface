/**
 * Twitch Chat Interface.
 */

const Interface = require('./Interface');

class Twitch extends Interface {

    /**
     * Initialize the Interface.
     */
    constructor() {
        super();

        this._client = null;
    }

    /**
     * Connects the Interface to it's data source/starts polling for data.
     *
     * @return {Promise}
     */
    connect() {
        super.connect();

        return new Promise((resolve, reject) => {
            const clientId = this.getConfig('clientId');
            let channel = this.getConfig('channel');

            if (
                clientId !== undefined && clientId.length &&
                channel !== undefined && channel.length
            ) {
                const username = this.getConfig('username');
                const accessToken = this.getConfig('accessToken');
                let identity = {};

                if (!Array.isArray(channel)) {
                    channel = [channel];
                }

                if (
                    username !== undefined && username.length &&
                    accessToken !== undefined && accessToken.length
                ) {
                    identity = {
                        username,
                        password: accessToken,
                    };
                }

                this._client = new tmi.client({
                    channels: channel,
                    identity,
                    options: {
                        clientId,
                        debug: false,
                    },
                    connection: {
                        reconnect: true,
                        secure: true,
                    },
                });

                this._client.addListener('message', (channel, user, message, self) => {
                    this.parseMessage({
                        channel,
                        user,
                        message,
                        self,
                    });
                });
                this._client.addListener('connected', () => resolve());
                this._client.addListener('connectfail', () => {
                    reject('Could not connect to Twitch.');
                });

                this._client.connect();
            } else {
                reject('No ClientID/Channel specified.');
            }
        });
    }

    /**
     * Disconnects the Interface from it's data source.
     */
    disconnect() {
        super.disconnect();

        this._client.disconnect();
        this._client = null;
    }

    /**
     * If the Interface supports writing, this method will send the given
     * message.
     *
     * @param {string} message
     *
     * @return {Promise}
     */
    send(message) {
        const channel = this.getConfig('channel');

        return this._client.say(channel, message);
    }

    /**
     * Parses a message in to the unified format.
     *
     * @param {Object} data
     */
    parseMessage({ channel, user, message, self }) {
        if (user['message-type'] != 'chat') {
            return;
        }

        let isBroadcaster = false;
        let emotes = null;

        if (
            user.emotes !== null &&
            Object.keys(user.emotes).length
        ) {
            emotes = user.emotes;
        }

        if (
            Object.keys(user.badges).indexOf('broadcaster') !== -1 &&
            user.badges.broadcaster == '1'
        ) {
            isBroadcaster = true;
        }

        if (this.shouldParseEmoticons()) {
            message = this.parseEmoticons(message, emotes);
        }

        this.emit('message', {
            username: user['display-name'],
            body: message,
            timestamp: user['sent-ts'] ? parseInt(user['sent-ts']) : null,
            extra: {
                colour: user.color,
                subscriber: user.subscriber,
                mod: user.mod,
                turbo: user.turbo,
                broadcaster: isBroadcaster,
            },
        });
    }

    /**
     * @param {string} message
     * @param {Object} rawEmotes
     *
     * @return {string}
     */
    parseEmoticons(message, rawEmotes) {
        if (rawEmotes === undefined || rawEmotes === null) {
            return message;
        }

        console.log('Raw', rawEmotes);

        const rawKeys = Object.keys(rawEmotes);
        let offset = 0;
        let newMessage = message;
        let emotes = {};

        rawKeys.forEach(key => {
            key = parseInt(key);

            rawEmotes[key].forEach(p => {
                const split = p.split('-');
                const start = parseInt(split[0]);

                emotes[start] = {
                    start,
                    end: parseInt(split[1]),
                    key,
                };
            });
        });

        let keys = Object.keys(emotes);

        keys.sort((a, b) => a - b);

        keys.forEach(k => {
            const { start, end, key } = emotes[k];
            const length = (end - start) + 1;
            const left = newMessage.substring(0, start + offset);
            const middle = `<img class="emoticon" src="https://static-cdn.jtvnw.net/emoticons/v1/${key}/3.0" />`;
            const right = newMessage.substring(end + 1 + offset);

            offset += middle.length - length;

            newMessage = `${left}${middle}${right}`;
        });

        console.log(newMessage);

        return newMessage;
    }

    /**
     * Returns the TMI instance.
     *
     * @return {*}
     */
    getClient() {
        return this._client;
    }

    /**
     * Name of the Interface.
     *
     * @return {string}
     */
    getName() {
        return 'Twitch';
    }

    /**
     * The short & lowercase key for the Interface. Should be the same as the
     * InterfaceBag Key.
     *
     * @return {string}
     */
    getKey() {
        return 'twitch';
    }

    /**
     * Returns whether the Interface supports emoticons.
     *
     * @return {boolean}
     */
    hasEmoticons() {
        return false;
    }

    /**
     * Returns whether the Interface supports writing/sending.
     *
     * @return {boolean}
     */
    hasWriting() {
        return true;
    }

    /**
     * Returns whether the Interface uses a LIVE datasource (Such as Websockets
     * or DataSource), or uses API polling.
     */
    isLive() {
        return true;
    }

}

module.exports = new Twitch;
