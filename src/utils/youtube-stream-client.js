import log from './logger';

const DEFAULT_STREAM_BASE_URL = 'https://www.googleapis.com';
const STREAM_PATH = '/youtube/v3/liveChat/messages/stream';
const LOG_SCOPE = 'YOUTUBELIVE STREAM';

export function createStreamListRequest({
  liveChatId,
  pageToken,
  maxResults,
  profileImageSize,
  hl,
}) {
  const request = {
    liveChatId,
    part: ['snippet', 'authorDetails'],
    profileImageSize,
    maxResults,
  };

  if (pageToken) {
    request.pageToken = pageToken;
  }

  if (hl) {
    request.hl = hl;
  }

  log.trace(LOG_SCOPE, 'CREATE REQUEST', {
    liveChatId,
    hasPageToken: Boolean(pageToken),
    pageTokenPreview: pageToken ? `${pageToken.slice(0, 8)}...` : null,
    maxResults,
    profileImageSize,
    hl: hl || null,
  });

  return request;
}

function buildStreamUrl(baseUrl, requestPayload) {
  const url = new URL(`${baseUrl.replace(/\/$/, '')}${STREAM_PATH}`);

  url.searchParams.set('liveChatId', requestPayload.liveChatId);
  requestPayload.part.forEach((part) => {
    url.searchParams.append('part', part);
  });

  if (requestPayload.maxResults) {
    url.searchParams.set('maxResults', String(requestPayload.maxResults));
  }

  if (requestPayload.profileImageSize) {
    url.searchParams.set(
      'profileImageSize',
      String(requestPayload.profileImageSize)
    );
  }

  if (requestPayload.pageToken) {
    url.searchParams.set('pageToken', requestPayload.pageToken);
  }

  if (requestPayload.hl) {
    url.searchParams.set('hl', requestPayload.hl);
  }

  return url.toString();
}

function summarizeResponse(object) {
  if (!object || typeof object !== 'object') {
    return { parsed: false };
  }

  return {
    kind: object.kind || null,
    itemCount: object.items ? object.items.length : 0,
    messageIds: object.items ? object.items.map((item) => item.id) : [],
    nextPageToken: object.nextPageToken || null,
    pollingIntervalMillis: object.pollingIntervalMillis || null,
    offlineAt: object.offlineAt || null,
  };
}

function tryParseNextJsonObject(text) {
  let index = 0;

  while (index < text.length && /\s|,/.test(text[index])) {
    index++;
  }

  if (index >= text.length || text[index] === ']') {
    return {
      consumed: index,
      object: null,
      done: text[index] === ']',
    };
  }

  if (text[index] !== '{') {
    return null;
  }

  let depth = 0;
  let inString = false;
  let escape = false;

  for (let cursor = index; cursor < text.length; cursor++) {
    const character = text[cursor];

    if (inString) {
      if (escape) {
        escape = false;
      } else if (character === '\\') {
        escape = true;
      } else if (character === '"') {
        inString = false;
      }

      continue;
    }

    if (character === '"') {
      inString = true;
      continue;
    }

    if (character === '{') {
      depth++;
      continue;
    }

    if (character === '}') {
      depth--;

      if (depth === 0) {
        const jsonText = text.slice(index, cursor + 1);

        try {
          return {
            object: JSON.parse(jsonText),
            consumed: cursor + 1,
            done: false,
          };
        } catch (error) {
          log.trace(LOG_SCOPE, 'JSON PARSE FAILED', {
            preview: jsonText.slice(0, 120),
            message: error.message,
          });
          return null;
        }
      }
    }
  }

  return null;
}

class StreamingJsonParser {
  constructor(onObject) {
    this.buffer = '';
    this.onObject = onObject;
    this.chunkCount = 0;
    this.objectCount = 0;
  }

  append(textChunk) {
    this.chunkCount++;
    log.trace(LOG_SCOPE, 'CHUNK RECEIVED', {
      chunkNumber: this.chunkCount,
      chunkBytes: textChunk.length,
      bufferBytesBefore: this.buffer.length,
      preview: textChunk.slice(0, 120),
    });

    this.buffer += textChunk;
    this.drain();
  }

  drain() {
    this.buffer = this.buffer.replace(/^\)\]\}'\s*/, '');

    while (this.buffer.length) {
      this.buffer = this.buffer.replace(/^\s*\[\s*/, '');

      const parsed = tryParseNextJsonObject(this.buffer);

      if (!parsed) {
        log.trace(LOG_SCOPE, 'WAITING FOR MORE JSON', {
          bufferBytes: this.buffer.length,
          bufferPreview: this.buffer.slice(0, 120),
        });
        break;
      }

      this.buffer = this.buffer.slice(parsed.consumed);

      if (parsed.object) {
        this.objectCount++;
        log.trace(LOG_SCOPE, 'JSON OBJECT PARSED', {
          objectNumber: this.objectCount,
          ...summarizeResponse(parsed.object),
        });
        this.onObject(parsed.object);
      }

      if (parsed.done) {
        this.buffer = this.buffer.replace(/^\s*\]\s*/, '');
        log.trace(LOG_SCOPE, 'JSON ARRAY END REACHED');
      }
    }
  }

  flush() {
    this.drain();

    const trimmed = this.buffer.trim();

    if (trimmed && trimmed !== ']') {
      try {
        const object = JSON.parse(trimmed.replace(/^\[|\]$/g, ''));
        this.objectCount++;
        log.trace(LOG_SCOPE, 'JSON FLUSH PARSED', {
          objectNumber: this.objectCount,
          ...summarizeResponse(object),
        });
        this.onObject(object);
      } catch (error) {
        log.trace(LOG_SCOPE, 'JSON FLUSH SKIPPED', {
          bufferPreview: trimmed.slice(0, 120),
          message: error.message,
        });
      }
    }

    log.trace(LOG_SCOPE, 'PARSER FLUSH DONE', {
      chunks: this.chunkCount,
      objects: this.objectCount,
      remainingBufferBytes: this.buffer.length,
    });

    this.buffer = '';
  }
}

async function parseHttpError(response) {
  let message = response.statusText || 'Stream request failed';
  let reason = 'streamRequestFailed';
  let errorBody = null;

  try {
    errorBody = await response.json();

    if (errorBody.error) {
      message = errorBody.error.message || message;
      reason = errorBody.error.errors?.[0]?.reason || reason;
    }
  } catch (error) {
    log.trace(LOG_SCOPE, 'ERROR BODY NOT JSON', {
      status: response.status,
      message: error.message,
    });
  }

  return {
    code: response.status,
    message,
    errors: [{ reason }],
    errorBody,
  };
}

export async function openStreamList({
  baseUrl = DEFAULT_STREAM_BASE_URL,
  accessToken,
  requestPayload,
  signal,
  onData,
  onError,
  onEnd,
}) {
  const url = buildStreamUrl(baseUrl, requestPayload);
  const requestStartedAt = Date.now();

  log.trace(LOG_SCOPE, 'FETCH START', {
    url,
    hasAccessToken: Boolean(accessToken),
    accessToken: log.redactToken(accessToken),
    hasPageToken: Boolean(requestPayload.pageToken),
  });

  let response;

  try {
    response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      signal,
    });
  } catch (error) {
    log.trace(LOG_SCOPE, 'FETCH FAILED', {
      name: error.name,
      message: error.message,
      elapsedMs: Date.now() - requestStartedAt,
    });

    if (onError) {
      onError(error);
    }

    return;
  }

  log.trace(LOG_SCOPE, 'FETCH RESPONSE', {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    contentType: response.headers.get('content-type'),
    elapsedMs: Date.now() - requestStartedAt,
    hasReadableBody: Boolean(response.body && response.body.getReader),
  });

  if (!response.ok) {
    const httpError = await parseHttpError(response);

    log.trace(LOG_SCOPE, 'HTTP ERROR', httpError);

    if (onError) {
      onError(httpError);
    }

    return;
  }

  if (!response.body || !response.body.getReader) {
    log.trace(LOG_SCOPE, 'FALLBACK TEXT MODE');

    const text = await response.text();

    log.trace(LOG_SCOPE, 'TEXT BODY RECEIVED', {
      bytes: text.length,
      preview: text.slice(0, 200),
    });

    const parser = new StreamingJsonParser(onData);
    parser.append(text);
    parser.flush();

    log.trace(LOG_SCOPE, 'STREAM END', {
      mode: 'text',
      elapsedMs: Date.now() - requestStartedAt,
    });

    if (onEnd) {
      onEnd();
    }

    return;
  }

  const reader = response.body.getReader();
  const parser = new StreamingJsonParser(onData);
  const textDecoder = new TextDecoder();

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      parser.append(textDecoder.decode(value, { stream: true }));
    }

    parser.flush();

    log.trace(LOG_SCOPE, 'STREAM END', {
      mode: 'readable',
      elapsedMs: Date.now() - requestStartedAt,
    });

    if (onEnd) {
      onEnd();
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      log.trace(LOG_SCOPE, 'STREAM ABORTED', {
        elapsedMs: Date.now() - requestStartedAt,
      });
      return;
    }

    log.trace(LOG_SCOPE, 'STREAM READ ERROR', {
      name: error.name,
      message: error.message,
      elapsedMs: Date.now() - requestStartedAt,
    });

    if (onError) {
      onError(error);
    }
  }
}

export { DEFAULT_STREAM_BASE_URL };
