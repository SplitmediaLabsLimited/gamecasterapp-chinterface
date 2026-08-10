import { buildSuperChatPayload } from './youtube-super-chat';
import { buildGiftPayload } from './youtube-live-events';
import log from './logger';

export const TRIGGER_GIFT = 'XBCTriggerGiftEvent';
export const TRIGGER_SUPER_CHAT = 'XBCTriggerSuperChatEvent';

/** YouTube gaming emoji CDN stand-in for sample gift artwork. */
export const SAMPLE_GIFT_URL =
  'https://www.youtube.com/s/gaming/emoji/0f0cae22/emoji_u1f381.svg';

function getMessageText(snippet = {}) {
  return (
    snippet.displayMessage ||
    snippet.textMessageDetails?.messageText ||
    snippet.text_message_details?.message_text ||
    ''
  ).trim();
}

function parseTrigger(text) {
  if (text.startsWith(TRIGGER_GIFT)) {
    return {
      kind: 'gift',
      remainingText: text.slice(TRIGGER_GIFT.length).trim(),
    };
  }

  if (text.startsWith(TRIGGER_SUPER_CHAT)) {
    return {
      kind: 'super-chat',
      remainingText: text.slice(TRIGGER_SUPER_CHAT.length).trim(),
    };
  }

  return null;
}

/**
 * If the chat body starts with a debug trigger prefix, emit a fake
 * gift/super-chat event. The original chat line is left untouched so the caller
 * still emits it as a normal message with its full, original text.
 *
 * Returns `false` when no trigger matched, `true` for a super-chat trigger, and
 * `{ giftCompanionText }` for a gift trigger (return shape kept for logging).
 */
export function maybeEmitDebugTrigger(
  iface,
  { id, snippet = {}, authorDetails = {} }
) {
  const trigger = parseTrigger(getMessageText(snippet));

  if (!trigger) {
    return false;
  }

  const publishedAt = snippet.publishedAt || new Date().toISOString();

  log.trace('YOUTUBE DEBUG TRIGGER', 'MATCH', {
    id,
    kind: trigger.kind,
    remainingText: trigger.remainingText || null,
    username: authorDetails.displayName || null,
  });

  if (trigger.kind === 'super-chat') {
    iface.emit(
      'super-chat',
      buildSuperChatPayload({
        id,
        snippet: {
          type: 'superChatEvent',
          publishedAt,
          superChatDetails: {
            amountMicros: '5000000',
            currency: 'USD',
            amountDisplayString: '$5.00',
            userComment: trigger.remainingText,
            tier: 2,
          },
        },
        authorDetails,
      })
    );

    log.trace('YOUTUBE DEBUG TRIGGER', 'EMIT SUPER-CHAT', {
      id,
      userComment: trigger.remainingText || '',
    });

    return true;
  }

  iface.emit(
    'gift',
    buildGiftPayload({
      id,
      snippet: {
        type: 'giftEvent',
        publishedAt,
        giftDetails: {
          giftName: 'Rose',
          jewelsAmount: 10,
          giftUrl: SAMPLE_GIFT_URL,
          giftDuration: { seconds: 5, nanos: 0 },
          altText: 'Rose',
          language: 'en',
          hasVisualEffect: true,
          comboCount: 1,
        },
      },
      authorDetails,
    })
  );

  log.trace('YOUTUBE DEBUG TRIGGER', 'EMIT GIFT', {
    id,
    companionText: trigger.remainingText || '',
  });

  return { giftCompanionText: trigger.remainingText };
}
