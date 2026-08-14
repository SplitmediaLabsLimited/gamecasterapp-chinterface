/**
 * Copyright (c) 2017-present, SplitmediaLabs Limited
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const DEFAULT_PUSHER_KEY = '32cbd69e4b950bf97679';
export const EMOTE_CDN = 'https://files.kick.com/emotes';
export const EMOTE_TOKEN = /\[emote:(\d+):([^\]]+)\]/g;
export const KICK_API_BASE = 'https://api.kick.com';
export const KICK_CHANNEL_LOOKUP = 'https://kick.com/api/v2/channels';

/** A viewer sent a chat message. Also emitted as unified `on('message')`. */
export const CHAT_MESSAGE_EVENT = 'App\\Events\\ChatMessageEvent';
/** A chat message was deleted. Use to remove that message from the UI. */
export const MESSAGE_DELETED_EVENT = 'App\\Events\\MessageDeletedEvent';
/** The chat was cleared. Use to wipe the visible message list (Twitch `clearchat`). */
export const CHATROOM_CLEAR_EVENT = 'App\\Events\\ChatroomClearEvent';
/** A user was banned or timed out. Use to remove that user's messages. */
export const USER_BANNED_EVENT = 'App\\Events\\UserBannedEvent';
/** A user ban/timeout was lifted. */
export const USER_UNBANNED_EVENT = 'App\\Events\\UserUnbannedEvent';
/** A message was pinned in chat. */
export const PINNED_MESSAGE_CREATED_EVENT = 'App\\Events\\PinnedMessageCreatedEvent';
/** A pinned message was removed. */
export const PINNED_MESSAGE_DELETED_EVENT = 'App\\Events\\PinnedMessageDeletedEvent';
/** A user subscribed or renewed. */
export const SUBSCRIPTION_EVENT = 'App\\Events\\SubscriptionEvent';
/** A user gifted one or more subs. */
export const GIFTED_SUBSCRIPTIONS_EVENT = 'App\\Events\\GiftedSubscriptionsEvent';
/** Follower count / follow activity on the channel. */
export const FOLLOWERS_UPDATED_EVENT = 'App\\Events\\FollowersUpdatedEvent';
/** Another channel hosted this channel. */
export const STREAM_HOST_EVENT = 'App\\Events\\StreamHostEvent';
/** Chatroom settings changed (e.g. slow/sub-only). */
export const CHATROOM_UPDATED_EVENT = 'App\\Events\\ChatroomUpdatedEvent';
/** A chat poll was created or updated. */
export const POLL_UPDATE_EVENT = 'App\\Events\\PollUpdateEvent';
/** A channel point / reward was redeemed. */
export const REWARD_REDEEMED_EVENT = 'App\\Events\\RewardRedeemedEvent';

export const KICK_PUSHER_EVENTS = {
  CHAT_MESSAGE_EVENT,
  MESSAGE_DELETED_EVENT,
  CHATROOM_CLEAR_EVENT,
  USER_BANNED_EVENT,
  USER_UNBANNED_EVENT,
  PINNED_MESSAGE_CREATED_EVENT,
  PINNED_MESSAGE_DELETED_EVENT,
  SUBSCRIPTION_EVENT,
  GIFTED_SUBSCRIPTIONS_EVENT,
  FOLLOWERS_UPDATED_EVENT,
  STREAM_HOST_EVENT,
  CHATROOM_UPDATED_EVENT,
  POLL_UPDATE_EVENT,
  REWARD_REDEEMED_EVENT,
};

/**
 * @param {string} [key]
 * @return {string}
 */
export function buildPusherUrl(key = DEFAULT_PUSHER_KEY) {
  return `wss://ws-us2.pusher.com/app/${key}?protocol=7&client=js&version=7.6.0&flash=false`;
}

/**
 * @param {string} event
 * @return {boolean}
 */
export function isPusherProtocolEvent(event) {
  return typeof event === 'string' && event.indexOf('pusher:') === 0;
}

/**
 * Decode a Pusher WebSocket frame. `data` is often a JSON string.
 *
 * @param {string|object} raw
 * @return {{ event: string|null, channel: string|null, data: object|string|null }}
 */
export function parsePusherFrame(raw) {
  let frame = raw;

  if (typeof raw === 'string') {
    try {
      frame = JSON.parse(raw);
    } catch (err) {
      return { event: null, channel: null, data: null };
    }
  }

  if (!frame || typeof frame !== 'object') {
    return { event: null, channel: null, data: null };
  }

  let data = frame.data;

  if (typeof data === 'string' && data.length) {
    try {
      data = JSON.parse(data);
    } catch (err) {
      // Keep the original string if it is not JSON.
    }
  }

  return {
    event: frame.event || null,
    channel: frame.channel || null,
    data: data === undefined ? null : data,
  };
}

/**
 * @param {Array|string|null} badges
 * @return {object}
 */
export function badgesToTwitchShape(badges) {
  const extra = {};

  if (!Array.isArray(badges)) {
    return extra;
  }

  badges.forEach((badge) => {
    if (typeof badge === 'string' && badge.length) {
      extra[badge] = '1';
      return;
    }

    if (!badge || typeof badge !== 'object') {
      return;
    }

    const type = badge.type || badge.name;
    if (!type) {
      return;
    }

    extra[type] = badge.count != null ? String(badge.count) : '1';
  });

  return extra;
}

/**
 * @param {object} data Kick ChatMessageEvent (or webhook-like) payload
 * @return {object}
 */
export function extractChatFields(data) {
  const payload = data && typeof data === 'object' ? data : {};
  const sender = payload.sender || {};
  const identity = sender.identity || {};
  const badges = identity.badges || [];
  const twitchBadges = badgesToTwitchShape(badges);
  const content = payload.content != null ? String(payload.content) : '';
  const createdAt = payload.created_at || payload.createdAt;
  let timestamp = new Date().getTime();

  if (createdAt) {
    const parsed = Date.parse(createdAt);
    if (!Number.isNaN(parsed)) {
      timestamp = parsed;
    }
  }

  const emotes = {};
  const token = /\[emote:(\d+):([^\]]+)\]/g;
  let match = token.exec(content);
  while (match) {
    emotes[match[1]] = match[2];
    match = token.exec(content);
  }

  return {
    id: payload.id || payload.message_id || null,
    username: sender.username || sender.slug || '',
    content,
    timestamp,
    colour: identity.color || identity.username_color || null,
    twitchBadges,
    kickBadges: badges,
    subscriber: !!twitchBadges.subscriber,
    mod: !!twitchBadges.moderator,
    broadcaster: !!twitchBadges.broadcaster,
    verified: !!(sender.is_verified || sender.verified),
    slug: sender.slug || sender.channel_slug || null,
    identity,
    repliesTo: payload.replies_to || payload.metadata || null,
    emotes,
  };
}

/**
 * @param {string} message XSS-filtered message
 * @return {string}
 */
export function replaceEmoteTokens(message) {
  if (typeof message !== 'string') {
    return '';
  }

  return message.replace(EMOTE_TOKEN, (full, id, name) => {
    return `<img class='emoticon' src='${EMOTE_CDN}/${id}/fullsize' alt='${name}' />`;
  });
}
