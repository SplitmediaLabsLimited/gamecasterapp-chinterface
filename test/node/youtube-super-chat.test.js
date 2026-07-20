const assert = require('assert');
const chinterface = require('../../dist/chinterface.js');

const youtube = chinterface.service('youtube');

function captureSuperChat(items) {
  let payload = null;

  youtube.on('super-chat', (data) => {
    payload = data;
  });

  youtube.handleMessages(items);
  youtube.destroy('super-chat');
  youtube.messagesId = [];

  return payload;
}

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

const superChatPayload = captureSuperChat([
  {
    id: 'msg-super-chat-1',
    snippet: {
      type: 'superChatEvent',
      publishedAt: '2026-07-20T09:30:00Z',
      superChatDetails: {
        amountMicros: '5000000',
        currency: 'USD',
        amountDisplayString: '$5.00',
        userComment: 'Great stream!',
        tier: 2,
      },
    },
    authorDetails,
  },
]);

assert.strictEqual(superChatPayload.id, 'msg-super-chat-1');
assert.strictEqual(superChatPayload.type, 'superChatEvent');
assert.strictEqual(superChatPayload.publishedAt, '2026-07-20T09:30:00Z');
assert.strictEqual(superChatPayload.author.displayName, 'Viewer One');
assert.strictEqual(
  superChatPayload.author.profileImageUrl,
  'https://yt3.ggpht.com/avatar=s88'
);
assert.strictEqual(superChatPayload.superChat.userComment, 'Great stream!');
assert.strictEqual(superChatPayload.superChat.amountDisplayString, '$5.00');
assert.strictEqual(superChatPayload.superChat.isSuperSticker, undefined);

const superStickerPayload = captureSuperChat([
  {
    id: 'msg-super-sticker-1',
    snippet: {
      type: 'superStickerEvent',
      publishedAt: '2026-07-20T09:31:00Z',
      superStickerDetails: {
        amountMicros: '2000000',
        currency: 'USD',
        amountDisplayString: '$2.00',
        tier: 1,
        superStickerMetadata: {
          stickerId: 'sticker_pack01_hype',
          altText: 'Cheering sticker',
          language: 'en',
        },
      },
    },
    authorDetails,
  },
]);

assert.strictEqual(superStickerPayload.type, 'superStickerEvent');
assert.strictEqual(superStickerPayload.superChat.isSuperSticker, true);
assert.strictEqual(
  superStickerPayload.superChat.superStickerMetadata.stickerId,
  'sticker_pack01_hype'
);
assert.strictEqual(superStickerPayload.superChat.userComment, '');

const emptyPayload = captureSuperChat([
  {
    id: 'msg-empty',
    snippet: { type: 'superChatEvent' },
    authorDetails: {},
  },
]);

assert.strictEqual(emptyPayload.author.displayName, '');
assert.strictEqual(emptyPayload.superChat.userComment, '');
assert.strictEqual(emptyPayload.superChat.amountMicros, '0');

console.log('youtube-super-chat tests passed');
