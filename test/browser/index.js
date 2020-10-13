import chinterface from '../../../chinterface';

(async () => {
  await twitch({
    clientId: 'j9tphzlo1qk2dmzf1ovj81zktwujm5z',
    channel: 'jonliney',
    username: 'jonliney',
    accessToken: 'vg2wq2r3ekj841sqoz4tacjai6lc85',
  });

  // await youtube({
  //     accessToken:
  //         'ya29.GlxnBR610Pghngtwieiql5X-GWS3zEb77Yj-GgTWVn4So4sZQ-Mo7qUtmWYvkHtluNqcQWV_UejwHIn5cpJsRDdc4UywjYqx3LFSoRYsk8nQtBKAVKWfGXmiioISYA',
  // });
})();

async function twitch(config) {
  const TwitchChat = chinterface.service('twitch');

  try {
    await TwitchChat.setConfig(config);
    await TwitchChat.loadUser();
    await TwitchChat.connect();

    TwitchChat.on('message', (data) => {
      console.log('TWITCH - [New Message]', data);
      const msg = document.createElement('div');
      msg.className = 'twitch message';
      msg.innerHTML = data.body;
      document.getElementById('chat').appendChild(msg);
    });

    TwitchChat.on('connected', () => {
      console.log('Twitch chat is connected!');
    });

    setTimeout(() => {
      TwitchChat.send('hi <script>console.log("hi");</script> how are you?');
    }, 2000);
    setTimeout(() => {
      TwitchChat.send(':)');
    }, 3000);
  } catch (e) {
    console.error(e);
  }
}

async function youtube(config) {
  const YouTubeChat = chinterface.service('youtube');

  try {
    YouTubeChat.on('connected', () => {
      console.log('YouTube chat is connected!');
    });
    YouTubeChat.on('refresh-token', () => {
      console.log('on yt refresh-token');
    });

    await YouTubeChat.setConfig(config);
    await YouTubeChat.loadChatId();
    await YouTubeChat.connect();

    YouTubeChat.on('message', (data) => {
      console.log('YOUTUBE - [New Message]', data);
      const msg = document.createElement('div');
      msg.className = 'youtube message';
      msg.innerHTML = data.body;
      document.getElementById('chat').appendChild(msg);
    });
  } catch (e) {
    console.error(e);
  }
}
