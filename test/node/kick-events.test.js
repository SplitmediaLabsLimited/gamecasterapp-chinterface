const assert = require('assert');
const chinterface = require('../../dist/chinterface.js');

const kick = chinterface.service('kick');

assert.strictEqual(kick.getKey(), 'kick');
assert.strictEqual(kick.getName(), 'Kick');
assert.strictEqual(kick.hasEmoticons(), true);
assert.strictEqual(kick.hasWriting(), true);
assert.strictEqual(kick.isLive(), true);

const innerMessage = {
  id: '48b77917-9cc6-4fd3-9a9c-e62dd89a95e2',
  chatroom_id: 259821,
  content: 'Hello [emote:4148074:HYPERCLAP]',
  type: 'message',
  created_at: '2025-01-14T16:08:06Z',
  sender: {
    id: 987654321,
    username: 'sender_name',
    slug: 'sender_name',
    identity: {
      color: '#FF5733',
      badges: [
        { type: 'moderator', text: 'Moderator' },
        { type: 'subscriber', text: 'Subscriber', count: 3 },
      ],
    },
  },
};

function captureMessage(raw) {
  let payload = null;

  kick.on('message', (data) => {
    payload = data;
  });

  kick.handlePusherFrame(raw);
  kick.destroy('message');

  return payload;
}

const encodedFrame = JSON.stringify({
  event: 'App\\Events\\ChatMessageEvent',
  channel: 'chatrooms.259821.v2',
  data: JSON.stringify(innerMessage),
});

const message = captureMessage(encodedFrame);

assert.ok(message, 'unified message should be emitted from ChatMessageEvent');
assert.strictEqual(message.id, innerMessage.id);
assert.strictEqual(message.username, 'sender_name');
assert.strictEqual(message.raw, innerMessage.content);
assert.strictEqual(message.timestamp, Date.parse(innerMessage.created_at));
assert.strictEqual(message.extra.colour, '#FF5733');
assert.strictEqual(message.extra.mod, true);
assert.strictEqual(message.extra.subscriber, true);
assert.strictEqual(message.extra.broadcaster, false);
assert.strictEqual(message.extra.turbo, false);
assert.strictEqual(message.extra.badges.moderator, '1');
assert.strictEqual(message.extra.badges.subscriber, '3');
assert.strictEqual(message.extra.emotes['4148074'], 'HYPERCLAP');
assert.strictEqual(message.extra.slug, 'sender_name');
assert.ok(
  message.body.indexOf("class='emoticon'") !== -1,
  'body should contain emoticon img'
);
assert.ok(
  message.body.indexOf('https://files.kick.com/emotes/4148074/fullsize') !== -1,
  'body should use Kick emote CDN'
);
assert.ok(
  message.body.indexOf('alt=\'HYPERCLAP\'') !== -1 ||
    message.body.indexOf('alt="HYPERCLAP"') !== -1,
  'emote img should include alt name'
);

const parsedHtml = kick.parseEmoticons('hi [emote:1:WAVE] there');
assert.ok(parsedHtml.indexOf('https://files.kick.com/emotes/1/fullsize') !== -1);

let clearPayload = null;
let pingFired = false;
let establishedFired = false;

kick.clientOn('App\\Events\\ChatroomClearEvent', (data) => {
  clearPayload = data;
});
kick.clientOn('pusher:ping', () => {
  pingFired = true;
});
kick.clientOn('pusher:connection_established', () => {
  establishedFired = true;
});

kick.handlePusherFrame({
  event: 'App\\Events\\ChatroomClearEvent',
  data: { chatroom_id: 259821 },
});
kick.handlePusherFrame({ event: 'pusher:ping', data: {} });
kick.handlePusherFrame({
  event: 'pusher:connection_established',
  data: JSON.stringify({ socket_id: '123.456' }),
});

assert.deepStrictEqual(clearPayload, { chatroom_id: 259821 });
assert.strictEqual(pingFired, false, 'pusher:ping must not dispatch clientOn');
assert.strictEqual(
  establishedFired,
  false,
  'pusher:connection_established must not dispatch clientOn'
);

let unknownPayload = null;
kick.clientOn('App\\Events\\RewardRedeemedEvent', (data) => {
  unknownPayload = data;
});
kick.handlePusherFrame({
  event: 'App\\Events\\RewardRedeemedEvent',
  data: { reward: 'test' },
});
assert.deepStrictEqual(unknownPayload, { reward: 'test' });

console.log('kick-events.test.js passed');
