/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const FACEBOOK_TOKEN_CODES = [190, 102];
const FACEBOOK_TOKEN_SUBCODES = [463, 467];
const TWITCH_IRC_LOGIN = /login authentication failed/i;
const TWITCH_TOKEN_MESSAGE = /invalid oauth token|oauth token is missing|invalid access token/i;

function parseCode(value) {
  const n = parseInt(value, 10);
  return Number.isFinite(n) ? n : null;
}

function graphError(error) {
  if (!error || typeof error !== 'object') {
    return null;
  }

  if (error.data && error.data.error && typeof error.data.error === 'object') {
    return error.data.error;
  }

  if (error.error && typeof error.error === 'object' && error.error.message) {
    return error.error;
  }

  return null;
}

function collectText(error) {
  if (error == null) {
    return '';
  }

  if (typeof error === 'string') {
    return error;
  }

  const fb = graphError(error);
  const parts = [
    error.message,
    error.statusText,
    error.msgtype,
    error.data && error.data.message,
    error.data && typeof error.data.error === 'string' ? error.data.error : null,
    fb && fb.message,
  ];

  return parts.filter(Boolean).join(' ');
}

/**
 * Normalize API / IRC / Graph errors into a YouTube-like errorDetails object.
 *
 * @param {*} error
 * @return {{ code: number|null, status: number|null, reason: string|null, message: string, error_subcode: number|null, type: string|null, errors: Array }}
 */
export function normalizeAuthError(error) {
  if (error == null) {
    return {
      code: null,
      status: null,
      reason: null,
      message: '',
      error_subcode: null,
      type: null,
      errors: [],
    };
  }

  if (typeof error === 'string') {
    return {
      code: null,
      status: null,
      reason: error,
      message: error,
      error_subcode: null,
      type: null,
      errors: [{ reason: error }],
    };
  }

  const fb = graphError(error);
  const status = parseCode(
    error.status || (error.data && error.data.status) || (fb && fb.code)
  );
  const code = parseCode(
    error.code != null ? error.code : fb && fb.code != null ? fb.code : status
  );
  const error_subcode = parseCode(
    error.error_subcode != null
      ? error.error_subcode
      : fb && fb.error_subcode
  );
  const type = error.type || (fb && fb.type) || null;
  const message =
    (fb && fb.message) ||
    error.message ||
    (error.data && error.data.message) ||
    String(error);
  const reason =
    (error.errors && error.errors[0] && error.errors[0].reason) ||
    (error_subcode != null ? String(error_subcode) : null) ||
    type ||
    message ||
    null;

  return {
    code,
    status,
    reason,
    message,
    error_subcode,
    type,
    errors: error.errors || [{ reason }],
  };
}

/**
 * @param {string} service twitch | kick | facebook | youtube | youtubeLive
 * @param {*} error
 * @return {boolean}
 */
export function needsTokenRefresh(service, error) {
  if (error == null) {
    return false;
  }

  const svc = String(service || '')
    .trim()
    .toLowerCase();
  const normalized = normalizeAuthError(error);
  const status = parseCode(normalized.status || normalized.code);
  const text = collectText(error) || normalized.message || '';
  const msgtype = String(
    (error && (error.msgtype || error.notice)) || ''
  ).toLowerCase();

  if (svc === 'twitch') {
    if (status === 401) {
      return true;
    }

    if (msgtype === 'login_unsuccessful') {
      return true;
    }

    if (TWITCH_IRC_LOGIN.test(text) || TWITCH_IRC_LOGIN.test(msgtype)) {
      return true;
    }

    if (TWITCH_TOKEN_MESSAGE.test(text)) {
      return true;
    }

    return false;
  }

  if (svc === 'kick') {
    return status === 401;
  }

  if (svc === 'facebook') {
    if (status === 401) {
      return true;
    }

    if (FACEBOOK_TOKEN_CODES.indexOf(normalized.code) !== -1) {
      return true;
    }

    if (FACEBOOK_TOKEN_SUBCODES.indexOf(normalized.error_subcode) !== -1) {
      return true;
    }

    return false;
  }

  if (svc === 'youtube' || svc === 'youtubelive' || svc === 'youtube-live') {
    return parseCode(error.code) === 401 || status === 401;
  }

  return false;
}
