const assert = require('assert');
const chinterface = require('../../dist/chinterface.js');

const youtube = chinterface.service('youtube');

const authorDetails = {
  channelId: 'UCsupporter123',
  channelUrl: 'https://www.youtube.com/channel/UCsupporter123',
  displayName: 'Viewer One',
  profileImageUrl: 'https://yt3.ggpht.com/avatar=s88',
  isVerified: false,
  isChatModerator: false,
  isChatOwner: false,
  isChatSponsor: false,
};

function reset() {
  youtube.messagesId = [];
}

function capture(eventName, items) {
  let payload = null;
  let messagePayload = null;

  youtube.on(eventName, (data) => {
    payload = data;
  });
  youtube.on('message', (data) => {
    messagePayload = data;
  });

  youtube.handleMessages(items);
  youtube.destroy(eventName);
  youtube.destroy('message');
  reset();

  return { payload, messagePayload };
}

const giftPayload = capture('gift', [
  {
    id: 'msg-gift-1',
    snippet: {
      type: 'giftEvent',
      publishedAt: '2026-08-06T01:00:00Z',
      giftDetails: {
        giftName: 'Rose',
        jewelsAmount: 10,
        giftUrl:
          'https://www.youtube.com/s/gaming/emoji/0f0cae22/emoji_u1f381.svg',
        giftDuration: { seconds: 5, nanos: 0 },
        altText: 'Rose',
        language: 'en',
        hasVisualEffect: true,
        comboCount: 1,
      },
    },
    authorDetails,
  },
]).payload;

assert.strictEqual(giftPayload.type, 'giftEvent');
assert.strictEqual(giftPayload.gift.giftName, 'Rose');
assert.strictEqual(giftPayload.gift.jewelsAmount, 10);
assert.strictEqual(giftPayload.gift.comboCount, 1);
assert.strictEqual(giftPayload.gift.giftDurationSeconds, 5);

const nestedGift = capture('gift', [
  {
    id: 'msg-gift-nested',
    snippet: {
      type: 'giftEvent',
      publishedAt: '2026-08-06T01:01:00Z',
      giftEventDetails: {
        giftMetadata: {
          giftName: 'Heart',
          jewelsAmount: 50,
          giftUrl: 'https://yt3.ggpht.com/sample-gift',
          giftDuration: { seconds: 3, nanos: 0 },
          altText: 'Heart',
          language: 'en',
          hasVisualEffect: false,
          comboCount: 2,
        },
      },
    },
    authorDetails,
  },
]).payload;

assert.strictEqual(nestedGift.gift.giftName, 'Heart');
assert.strictEqual(nestedGift.gift.comboCount, 2);

reset();
let comboCount = 0;
youtube.on('gift', (data) => {
  comboCount = data.gift.comboCount;
});
youtube.handleMessages([
  {
    id: 'msg-gift-combo',
    snippet: {
      type: 'giftEvent',
      publishedAt: '2026-08-06T01:02:00Z',
      giftDetails: { giftName: 'Rose', jewelsAmount: 10, comboCount: 1 },
    },
    authorDetails,
  },
]);
youtube.handleMessages([
  {
    id: 'msg-gift-combo',
    snippet: {
      type: 'giftEvent',
      publishedAt: '2026-08-06T01:02:01Z',
      giftDetails: { giftName: 'Rose', jewelsAmount: 10, comboCount: 3 },
    },
    authorDetails,
  },
]);
youtube.destroy('gift');
assert.strictEqual(comboCount, 3);
reset();

const triggerGiftOnly = capture('gift', [
  {
    id: 'trigger-gift-1',
    snippet: {
      type: 'textMessageEvent',
      publishedAt: '2026-08-06T01:03:00Z',
      displayMessage: 'XBCTriggerGiftEvent',
    },
    authorDetails,
  },
]);
assert.strictEqual(triggerGiftOnly.payload.type, 'giftEvent');
assert.strictEqual(triggerGiftOnly.payload.gift.giftName, 'Rose');
assert.strictEqual(triggerGiftOnly.messagePayload.raw, 'XBCTriggerGiftEvent');

const triggerGiftMessage = capture('gift', [
  {
    id: 'trigger-gift-2',
    snippet: {
      type: 'textMessageEvent',
      publishedAt: '2026-08-06T01:04:00Z',
      displayMessage: 'XBCTriggerGiftEvent Nice!',
    },
    authorDetails,
  },
]);
assert.strictEqual(triggerGiftMessage.payload.gift.giftName, 'Rose');
assert.strictEqual(
  triggerGiftMessage.messagePayload.raw,
  'XBCTriggerGiftEvent Nice!'
);

const triggerSuperChat = capture('super-chat', [
  {
    id: 'trigger-sc-1',
    snippet: {
      type: 'textMessageEvent',
      publishedAt: '2026-08-06T01:05:00Z',
      displayMessage: 'XBCTriggerSuperChatEvent Hello',
    },
    authorDetails,
  },
]);
assert.strictEqual(triggerSuperChat.payload.type, 'superChatEvent');
assert.strictEqual(triggerSuperChat.payload.superChat.userComment, 'Hello');
assert.strictEqual(
  triggerSuperChat.messagePayload.raw,
  'XBCTriggerSuperChatEvent Hello'
);

const sponsor = capture('new-sponsor', [
  {
    id: 'sponsor-1',
    snippet: {
      type: 'newSponsorEvent',
      publishedAt: '2026-08-06T01:06:00Z',
      newSponsorDetails: { memberLevelName: 'Gold', isUpgrade: true },
    },
    authorDetails,
  },
]).payload;
assert.strictEqual(sponsor.sponsor.memberLevelName, 'Gold');
assert.strictEqual(sponsor.sponsor.isUpgrade, true);

console.log('youtube-live-events tests passed');
