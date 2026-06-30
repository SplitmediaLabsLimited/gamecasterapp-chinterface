/**

 * Copyright (c) 2017-present, SplitmediaLabs Limited

 *

 * This source code is licensed under the MIT license found in the

 * LICENSE file in the root directory of this source tree.

 */

import Youtube from './youtube';

import {
  createStreamListRequest,
  DEFAULT_STREAM_BASE_URL,
  openStreamList,
} from '../utils/youtube-stream-client';

import log from '../utils/logger';

const LOG_SCOPE = 'YOUTUBELIVE';

class YoutubeLive extends Youtube {
  streamAbortController;

  reconnectTimeout;

  shouldResumeStream = false;

  streamSessionId = 0;

  streamPollingInterval;

  constructor() {
    super();

    this.setConfig({
      maxResults: 500,

      reconnect: true,

      streamBaseUrl: DEFAULT_STREAM_BASE_URL,
    });

    log.trace(LOG_SCOPE, 'CONSTRUCTED', {
      defaults: {
        maxResults: 500,

        reconnect: true,

        streamBaseUrl: DEFAULT_STREAM_BASE_URL,
      },
    });
  }

  setConfig(key, value = null) {
    super.setConfig(key, value);

    const configSnapshot = {
      liveChatId: this.getConfig('liveChatId') || null,

      accessToken: log.redactToken(this.getConfig('accessToken')),

      maxResults: this.getConfig('maxResults'),

      profileImageSize: this.getConfig('profileImageSize'),

      interval: this.getConfig('interval'),

      reconnect: this.getConfig('reconnect'),

      streamBaseUrl: this.getConfig('streamBaseUrl'),

      parseEmoticon: this.getConfig('parseEmoticon'),

      parseUrl: this.getConfig('parseUrl'),

      formatMessages: this.getConfig('formatMessages'),
    };

    log.trace(LOG_SCOPE, 'SET CONFIG', configSnapshot);
  }

  async loadChatId() {
    log.trace(LOG_SCOPE, 'LOAD CHAT ID START');

    try {
      await super.loadChatId();
      log.trace(LOG_SCOPE, 'LOAD CHAT ID DONE', {
        liveChatId: this.getConfig('liveChatId'),
      });
    } catch (error) {
      log.trace(LOG_SCOPE, 'LOAD CHAT ID FAILED', {
        message: error.message,
      });
      throw error;
    }
  }

  connect() {
    log.trace(LOG_SCOPE, 'CONNECT CALLED', {
      alreadyConnected: this.connected,
    });

    if (this.connected) {
      log.trace(LOG_SCOPE, 'CONNECT SKIPPED', {
        reason: 'already connected',
      });

      return;
    }

    this.requiredConfigSet();

    this.nextPageToken = undefined;

    this.connected = true;

    this.shouldResumeStream = true;

    this.resetReconnect();

    log.trace(LOG_SCOPE, 'CONNECT READY', {
      liveChatId: this.getConfig('liveChatId'),

      accessToken: log.redactToken(this.getConfig('accessToken')),

      streamBaseUrl: this.getConfig('streamBaseUrl', DEFAULT_STREAM_BASE_URL),
    });

    this.emit('connected');

    this.startStream();
  }

  disconnect() {
    log.trace(LOG_SCOPE, 'DISCONNECT CALLED', {
      wasConnected: this.connected,

      sessionId: this.streamSessionId,

      pageToken: this.nextPageToken || null,
    });

    this.shouldResumeStream = false;

    this.cancelStream('disconnect');

    clearTimeout(this.reconnectTimeout);

    this.reconnectTimeout = null;

    if (this.connected) {
      this.connected = false;

      this.emit('disconnected');
    }

    log.trace(LOG_SCOPE, 'DISCONNECT DONE');
  }

  fetchMessages() {
    if (!this.connected) {
      log.trace(LOG_SCOPE, 'FETCH MESSAGES SKIPPED', {
        reason: 'not connected',
      });

      return;
    }

    log.trace(LOG_SCOPE, 'FETCH MESSAGES');

    this.startStream();
  }

  startStream() {
    if (!this.connected || !this.shouldResumeStream) {
      log.trace(LOG_SCOPE, 'START STREAM SKIPPED', {
        connected: this.connected,

        shouldResumeStream: this.shouldResumeStream,
      });

      return;
    }

    clearTimeout(this.reconnectTimeout);

    this.reconnectTimeout = null;

    this.cancelStream('restart');

    const requestPayload = createStreamListRequest({
      liveChatId: this.getConfig('liveChatId'),

      pageToken: this.nextPageToken,

      maxResults: this.getConfig('maxResults'),

      profileImageSize: this.getConfig('profileImageSize'),

      hl: this.getConfig('hl'),
    });

    const sessionId = ++this.streamSessionId;

    this.streamAbortController = new AbortController();

    log.trace(LOG_SCOPE, 'START STREAM', {
      sessionId,

      pageToken: this.nextPageToken || null,

      liveChatId: this.getConfig('liveChatId'),

      streamBaseUrl: this.getConfig('streamBaseUrl', DEFAULT_STREAM_BASE_URL),

      reconnectDelayMs: this.getStreamReconnectDelay(),
    });

    openStreamList({
      baseUrl: this.getConfig('streamBaseUrl', DEFAULT_STREAM_BASE_URL),

      accessToken: this.getConfig('accessToken'),

      requestPayload,

      signal: this.streamAbortController.signal,

      onData: (response) => this.handleStreamResponse(response, sessionId),

      onError: (error) => this.handleStreamError(error, sessionId),

      onEnd: () => this.handleStreamEnd(sessionId),
    }).catch((error) => {
      if (sessionId !== this.streamSessionId) {
        log.trace(LOG_SCOPE, 'START STREAM ERROR IGNORED', {
          sessionId,

          activeSessionId: this.streamSessionId,

          error,
        });

        return;
      }

      log.trace(LOG_SCOPE, 'START STREAM ERROR', error);

      this.checkError(this.normalizeStreamError(error));
    });
  }

  handleStreamResponse(response, sessionId) {
    if (sessionId !== this.streamSessionId) {
      log.trace(LOG_SCOPE, 'STREAM RESPONSE IGNORED', {
        reason: 'stale session',

        sessionId,

        activeSessionId: this.streamSessionId,
      });

      return;
    }

    const itemCount = response.items ? response.items.length : 0;

    log.trace(LOG_SCOPE, 'STREAM RESPONSE', {
      sessionId,

      itemCount,

      nextPageToken: response.nextPageToken || null,

      pollingIntervalMillis: response.pollingIntervalMillis || null,

      offlineAt: response.offlineAt || null,

      messageIds: itemCount ? response.items.map((item) => item.id) : [],
    });

    if (response.offlineAt) {
      log.trace(LOG_SCOPE, 'CHAT OFFLINE', {
        offlineAt: response.offlineAt,
      });

      this.emit('chat-ended');

      this.disconnect();

      return;
    }

    if (response.nextPageToken) {
      this.nextPageToken = response.nextPageToken;
    }

    if (response.pollingIntervalMillis) {
      this.streamPollingInterval = parseInt(response.pollingIntervalMillis, 10);
    }

    if (itemCount) {
      this.handleMessages(response.items);
    } else {
      log.trace(LOG_SCOPE, 'NO NEW MESSAGES IN RESPONSE');
    }

    this.resetReconnect();

    this.scheduleNextStreamPoll();
  }

  handleMessages(list) {
    log.trace(LOG_SCOPE, 'HANDLE MESSAGES START', {
      incomingCount: list.length,

      knownMessageCount: this.messagesId.length,

      messages: list.map((item) => ({
        id: item.id,

        type: item.snippet?.type,

        username: item.authorDetails?.displayName,

        duplicate: this.messagesId.includes(item.id),
      })),
    });

    super.handleMessages(list);

    log.trace(LOG_SCOPE, 'HANDLE MESSAGES DONE', {
      knownMessageCount: this.messagesId.length,
    });
  }

  handleStreamError(error, sessionId) {
    if (sessionId !== this.streamSessionId) {
      log.trace(LOG_SCOPE, 'STREAM ERROR IGNORED', {
        reason: 'stale session',

        sessionId,

        activeSessionId: this.streamSessionId,

        error,
      });

      return;
    }

    if (!this.connected || !this.shouldResumeStream) {
      log.trace(LOG_SCOPE, 'STREAM ERROR IGNORED', {
        reason: 'not active',

        connected: this.connected,

        shouldResumeStream: this.shouldResumeStream,

        error,
      });

      return;
    }

    log.trace(LOG_SCOPE, 'STREAM ERROR', {
      sessionId,

      error,
    });

    this.cancelStream('error');

    const normalizedError = this.normalizeStreamError(error);

    const reason = normalizedError.errors && normalizedError.errors[0]?.reason;

    if (reason === 'rateLimitExceeded') {
      this.increaseReconnect();

      log.trace(LOG_SCOPE, 'RATE LIMITED', {
        nextDelayMs: this.getStreamReconnectDelay(),

        reconnectAttempt: this.reconnectAttempt,
      });

      this.scheduleNextStreamPoll();

      this.emit('error', normalizedError);

      return;
    }

    this.checkError(normalizedError);
  }

  handleStreamEnd(sessionId) {
    if (sessionId !== this.streamSessionId) {
      log.trace(LOG_SCOPE, 'STREAM END IGNORED', {
        reason: 'stale session',

        sessionId,

        activeSessionId: this.streamSessionId,
      });

      return;
    }

    if (!this.connected || !this.shouldResumeStream) {
      log.trace(LOG_SCOPE, 'STREAM END IGNORED', {
        reason: 'not active',

        connected: this.connected,

        shouldResumeStream: this.shouldResumeStream,
      });

      return;
    }

    log.trace(LOG_SCOPE, 'STREAM END', {
      sessionId,

      pageToken: this.nextPageToken || null,

      pollAlreadyScheduled: Boolean(this.reconnectTimeout),
    });

    this.streamAbortController = null;

    if (!this.reconnectTimeout) {
      this.scheduleNextStreamPoll(true);
    }
  }

  getStreamReconnectDelay() {
    const configuredInterval = parseInt(this.getConfig('interval'), 10) || 5000;

    const pollingInterval = this.streamPollingInterval || configuredInterval;

    return Math.max(
      pollingInterval > configuredInterval
        ? pollingInterval
        : configuredInterval,

      this.reconnectCurrentInterval
    );
  }

  scheduleNextStreamPoll(immediate = false) {
    clearTimeout(this.reconnectTimeout);

    this.reconnectTimeout = null;

    if (!this.connected || !this.shouldResumeStream) {
      log.trace(LOG_SCOPE, 'SCHEDULE POLL SKIPPED', {
        connected: this.connected,

        shouldResumeStream: this.shouldResumeStream,
      });

      return;
    }

    const delay = immediate ? 0 : this.getStreamReconnectDelay();

    log.trace(LOG_SCOPE, 'SCHEDULE NEXT POLL', {
      immediate,

      delayMs: delay,

      pageToken: this.nextPageToken || null,

      reconnectEnabled: this.getConfig('reconnect'),

      sessionId: this.streamSessionId,
    });

    if (!this.getConfig('reconnect')) {
      log.trace(LOG_SCOPE, 'SCHEDULE POLL SKIPPED', {
        reason: 'reconnect disabled',
      });

      return;
    }

    this.reconnectTimeout = setTimeout(() => {
      log.trace(LOG_SCOPE, 'POLL TIMER FIRED', {
        pageToken: this.nextPageToken || null,

        sessionId: this.streamSessionId,
      });

      this.startStream();
    }, delay);
  }

  cancelStream(reason = 'unknown') {
    log.trace(LOG_SCOPE, 'CANCEL STREAM', {
      reason,

      sessionId: this.streamSessionId,

      hadController: Boolean(this.streamAbortController),
    });

    if (this.streamAbortController) {
      this.streamAbortController.abort();

      this.streamAbortController = null;
    }
  }

  normalizeStreamError(error) {
    log.trace(LOG_SCOPE, 'NORMALIZE ERROR', error);

    const grpcCode = parseInt(error.code, 10);

    const details = error.message || error.details || 'Unknown stream error';

    if (grpcCode === 16) {
      return { code: 401, message: details, errors: [{ reason: 'authError' }] };
    }

    if (grpcCode === 7) {
      return {
        code: 403,

        message: details,

        errors: [{ reason: 'forbidden' }],
      };
    }

    if (grpcCode === 5) {
      return {
        code: 404,

        message: details,

        errors: [{ reason: 'liveChatNotFound' }],
      };
    }

    if (grpcCode === 9) {
      return {
        code: 403,

        message: details,

        errors: [{ reason: 'liveChatEnded' }],
      };
    }

    if (grpcCode === 8) {
      return {
        code: 403,

        message: details,

        errors: [{ reason: 'rateLimitExceeded' }],
      };
    }

    if (details.indexOf('liveChatDisabled') !== -1) {
      return {
        code: 403,

        message: details,

        errors: [{ reason: 'liveChatDisabled' }],
      };
    }

    if (details.indexOf('liveChatEnded') !== -1) {
      return {
        code: 403,

        message: details,

        errors: [{ reason: 'liveChatEnded' }],
      };
    }

    if (details.indexOf('liveChatNotFound') !== -1) {
      return {
        code: 404,

        message: details,

        errors: [{ reason: 'liveChatNotFound' }],
      };
    }

    if (details.indexOf('Failed to fetch') !== -1) {
      return {
        code: 403,

        message:
          'Unable to reach the YouTube stream endpoint from the browser. Check network/CORS and that streamBaseUrl is https://www.googleapis.com.',

        errors: [{ reason: 'networkError' }],
      };
    }

    return {
      code: grpcCode || 500,

      message: details,

      errors: [{ reason: details }],
    };
  }

  checkError(error) {
    const reason = error.errors && error.errors[0]?.reason;

    log.trace(LOG_SCOPE, 'CHECK ERROR', {
      code: error.code,

      reason,

      message: error.message,
    });

    switch (parseInt(error.code, 10)) {
      case 401:
        log.trace(LOG_SCOPE, 'EMIT refresh-token');

        this.emit('refresh-token', error);

        break;

      case 403:
        if (['liveChatDisabled', 'liveChatEnded'].includes(reason)) {
          log.trace(LOG_SCOPE, 'EMIT error + disconnect', { reason });

          this.emit('error', error);

          this.disconnect();

          break;
        }

        log.trace(LOG_SCOPE, 'EMIT error', { reason });

        this.emit('error', error);

        break;

      default:
        log.trace(LOG_SCOPE, 'EMIT error', { reason: reason || 'unknown' });

        this.emit('error', error);

        break;
    }
  }

  getName() {
    return 'YouTube Live';
  }

  getKey() {
    return 'youtubeLive';
  }

  isLive() {
    return true;
  }
}

export default YoutubeLive;
