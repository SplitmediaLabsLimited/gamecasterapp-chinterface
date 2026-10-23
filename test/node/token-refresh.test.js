const assert = require('assert');
const chinterface = require('../../dist/chinterface.js');

function captureEvents(service) {
  let refresh = null;
  let error = null;

  service.on('refresh-token', (data) => {
    refresh = data;
  });
  service.on('error', (data) => {
    error = data;
  });

  return {
    getRefresh: () => refresh,
    getError: () => error,
    reset() {
      refresh = null;
      error = null;
      service.destroy('refresh-token');
      service.destroy('error');
    },
  };
}

const twitch = chinterface.service('twitch');
const kick = chinterface.service('kick');
const facebook = chinterface.service('facebook');

let events = captureEvents(twitch);
twitch.checkError({ status: 401, message: 'Invalid OAuth token' });
assert.ok(events.getRefresh(), 'Twitch Helix 401 should emit refresh-token');
assert.strictEqual(events.getError(), null, 'Twitch 401 must not also emit error');
assert.strictEqual(events.getRefresh().status, 401);
events.reset();

events = captureEvents(twitch);
twitch.checkError({ status: 403, message: 'Missing scope' });
assert.strictEqual(events.getRefresh(), null, 'Twitch 403 must not emit refresh-token');
assert.ok(events.getError(), 'Twitch 403 should emit error');
events.reset();

events = captureEvents(twitch);
twitch.checkError('Login authentication failed');
assert.ok(events.getRefresh(), 'Twitch IRC login failure should emit refresh-token');
events.reset();

events = captureEvents(twitch);
twitch.checkError({ msgtype: 'login_unsuccessful', message: 'Login unsuccessful' });
assert.ok(events.getRefresh(), 'Twitch notice login_unsuccessful should emit refresh-token');
events.reset();

events = captureEvents(kick);
kick.checkError({ status: 401, message: 'Unauthorized' });
assert.ok(events.getRefresh(), 'Kick HTTP 401 should emit refresh-token');
assert.strictEqual(events.getError(), null);
events.reset();

events = captureEvents(kick);
kick.checkError({ status: 403, message: 'Forbidden' });
assert.strictEqual(events.getRefresh(), null, 'Kick 403 must not emit refresh-token');
assert.ok(events.getError(), 'Kick 403 should emit error');
events.reset();

events = captureEvents(facebook);
facebook.checkError({
  code: 190,
  status: 400,
  error_subcode: 463,
  type: 'OAuthException',
  message: 'Error validating access token: Session has expired',
});
assert.ok(events.getRefresh(), 'Facebook Graph 190/463 should emit refresh-token');
assert.strictEqual(events.getError(), null);
assert.strictEqual(events.getRefresh().code, 190);
assert.strictEqual(events.getRefresh().error_subcode, 463);
events.reset();

events = captureEvents(facebook);
facebook.checkError({
  code: 102,
  type: 'OAuthException',
  message: 'Session key invalid',
});
assert.ok(events.getRefresh(), 'Facebook Graph 102 should emit refresh-token');
events.reset();

events = captureEvents(facebook);
facebook.checkError({
  code: 200,
  status: 403,
  type: 'OAuthException',
  message: 'Permissions error',
});
assert.strictEqual(
  events.getRefresh(),
  null,
  'Facebook permission errors must not emit refresh-token'
);
assert.ok(events.getError(), 'Facebook permission errors should emit error');
events.reset();

console.log('token-refresh.test.js passed');
