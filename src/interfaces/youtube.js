/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from 'axios';
import Interface from './interface';

class Youtube extends Interface {

    messagesId = [];
    fetchInterval;
    nextPageToken;

    /**
     * Initialize the Interface.
     */
    constructor() {
        super();

        this.required = [
            'liveChatId',
            'accessToken',
        ];
        this.setConfig({
            maxResults: 200,
            interval: 5000,
            profileImageSize: 64,
            parseUrl: true,
            formatMessages: true,
            parseEmoticon: true,
        });
    }

    /**
     * Creates the initial message request
     *
     * @return {Promise.<void>}
     */
    async connect() {
        super.connect();

        try {
            this.connected = true;
            this.emit('connected');

            await this.fetchMessages();
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
     * Stops the polling request
     */
    disconnect() {
        super.disconnect();

        this.connected = false;
        clearInterval(this.fetchInterval);

        this.emit('disconnected');
    }

    /**
     * Send message to the specified live chat id
     *
     * @return {Promise}
     */
    async send(messageText) {
        if (!messageText.length) {
            throw new Error('A message cannot be empty!');
        }

        const liveChatId = this.getConfig('liveChatId');
        const { data } = await this.api('post', 'liveChat/messages?part=snippet,authorDetails', {
            snippet: {
                liveChatId,
                type: 'textMessageEvent',
                textMessageDetails: {
                    messageText,
                },
            }
        });

        this.handleMessages([data]);
    }

    /**
     * Fetch current available messages
     *
     * @return {Promise}
     */
    async fetchMessages() {
        const liveChatId = this.getConfig('liveChatId');
        const maxResults = this.getConfig('maxResults');
        const profileImageSize = this.getConfig('profileImageSize');
        const pageToken = this.nextPageToken ? this.nextPageToken : '';

        const { data } = await this.api('get', 'liveChat/messages', {
            part: 'snippet,authorDetails',
            profileImageSize,
            liveChatId,
            maxResults,
            pageToken,
        });
        const { items, nextPageToken, pollingIntervalMillis } = data;

        this.nextPageToken = nextPageToken;
        this.handleMessages(items);

        const intervalConfig = parseInt(this.getConfig('interval'));
        const interval = pollingIntervalMillis > intervalConfig ? pollingIntervalMillis : intervalConfig;

        if (this.connected) {
            this.fetchInterval = setTimeout(() => {
                this.fetchMessages();
            }, interval);
        }
    }

    /**
     * Parses a message into the unified format.
     *
     * @param {object} list
     */
    handleMessages(list) {
        list.forEach(({id, snippet, authorDetails}) => {
            if (this.messagesId.includes(id)) {
                return;
            }

            this.messagesId.push(id);

            let body = null;
            let message = snippet.displayMessage || '';
            let extra = {
                type: snippet.type,
                authorChannelId: authorDetails.channelId,
                image: authorDetails.profileImageUrl || '',
                moderator: authorDetails.isChatModerator,
                owner: authorDetails.isChatOwner,
                sponsor: authorDetails.isChatSponsor,
                verified: authorDetails.isVerified,
            };

            switch (snippet.type) {
                case 'superChatEvent':
                    message = snippet.superChatDetails.userComment;
                    extra.amount = snippet.superChatDetails.amountDisplayString;
                    extra.amountMicros = snippet.superChatDetails.amountMicros;
                    extra.tier = snippet.superChatDetails.tier;
                    extra.currency = snippet.superChatDetails.currency;

                    this.emit('super-chat', snippet.superChatDetails);
                    return;

                case 'messageDeletedEvent':
                    this.emit('delete-message', snippet.messageDeletedDetails.deletedMessageId);
                    return;

                case 'userBannedEvent':
                    this.emit('user-banned', snippet.userBannedDetails);
                    return;

                case 'chatEndedEvent':
                    this.emit('chat-ended');
                    return;
            }

            if (this.getConfig('formatMessages')) {
                body = this.parseUrl(message);
            }

            this.emit('message', {
                id,
                body,
                username: authorDetails.displayName,
                raw: message,
                timestamp: new Date(snippet.publishedAt).getTime() || new Date().getTime(),
                extra,
            });
        });
    }

    /**
     * Parses Links
     *
     * return {string}
     */
    parseUrl(message) {
        const regex = new RegExp(/https?:\/\/\S+/ig);

        return message.replace(regex, match => {
            return `<a href='${match}' class='link'>${match}</a>`;
        });
    }

    /**
     * Sets Config value(s) for the Interface.
     *
     * @param {string|object} [key]
     * @param {string|number|object} [value]
     */
    setConfig(key, value = null) {
        super.setConfig(key, value);

        this.http = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3/',
            headers: {
                'Authorization': `Bearer ${this.getConfig('accessToken')}`,
            },
        });
    }

    /**
     * Fetch and set the required chat ID.
     *
     * @returns {Promise.<void>}
     */
    async loadChatId() {
        const { data } = await this.api('get', 'liveBroadcasts', {
            part: 'snippet',
            broadcastStatus: 'active',
            broadcastType: 'all',
            maxResults: 1,
        });

        if (data.items.length) {
            const liveChatId = this.getConfig('liveChatId', data.items[0].snippet.liveChatId || null);
            this.setConfig({
                liveChatId,
            });
        } else {
            throw new Error('No live broadcasts available.');
        }
    }

    /**
     * Query the YouTube API for a given method, endpoint and query param.
     *
     * @param {string} method
     * @param {string} url
     * @param {object} data
     *
     * @return {Promise}
     */
    async api(method, url, data = {}) {
        const accessToken = this.getConfig('accessToken');
        let request = {
            method,
            url,
        };

        if (!accessToken) {
            throw new Error('accessToken not set.');
        }

        if (method === 'get') {
            request.params = data;
        } else {
            request.data = data;
        }

        try {
            return await this.http.request(request);
        } catch ({ response }) {
            const { error } = response.data;

            this.checkError(error);

            throw new Error(error.errors[0].reason);
        }
    }

    /**
     * Check the error status and emit appropriate event.
     *
     * @param {object} error
     */
    checkError(error) {
        switch (parseInt(error.code)) {
            case 401:
                this.emit('refresh-token', error);
                break;
            default:
                this.emit('error', error);
                break;
        }
    }

    /**
     * Name of the Interface.
     *
     * @return {string}
     */
    getName() {
        return 'Youtube';
    }

    /**
     * The short & lowercase key for the Interface. Should be the same as the
     * InterfaceBag Key.
     *
     * @return {string}
     */
    getKey() {
        return 'youtube';
    }

    /**
     * Returns whether the Interface supports emoticons.
     *
     * @return {boolean}
     */
    hasEmoticons() {
        return true;
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
        return false;
    }
}

export default new Youtube();