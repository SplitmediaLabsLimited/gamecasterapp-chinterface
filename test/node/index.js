const express = require('express');
const app = express();
const axios = require('axios');
const uws = require('uws');
const chinterface = require('../../../chinterface');

app.get('/', async (req, res) => {
  	twitch({
        clientId: 'j9tphzlo1qk2dmzf1ovj81zktwujm5z',
        channel: 'jonliney',
        username: 'jonliney',
        accessToken: 'vg2wq2r3ekj841sqoz4tacjai6lc85',
	});

  	mixer({
        userId: 7503472,
        channelId: 5862091,
        username: 'jonline',
        accessToken: 'wskEQfQcfkjRyOo8yngswF6CBStVL6XpitjU0Ipb83MWwXtgloOqy1yEeRyIMBxl',
	});

  	res.send('Creating chat instances.');
});

async function twitch(config) {
    const TwitchChat = chinterface.service('twitch');

    try {
        TwitchChat.on('connected', () => {
            console.log('Twitch chat is connected!');
        });

        await TwitchChat.setConfig(config);
        await TwitchChat.loadUser();
        await TwitchChat.connect();


        TwitchChat.on('message', data => {
            console.log('TWITCH - [New Message]', data);
        });
    } catch (err) {
        console.error(err);
    }
}

async function mixer(config) {
    const MixerChat = chinterface.service('mixer');

    try {
        MixerChat.on('connected', () => {
            console.log('Mixer chat is connected!');
        });

        await MixerChat.setWebSocket(uws);
        await MixerChat.setConfig(config);
        await MixerChat.loadUser();
        await MixerChat.connect();


        MixerChat.on('message', data => {
            console.log('MIXER - [New Message]', data);
        });
    } catch (e) {
        console.error(e);
    }
}

app.listen(3000, () => {
	console.log('Running on port 3000!');
});