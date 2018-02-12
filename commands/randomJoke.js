const Discord = require('discord.js');
const Subiex = require('../bot.js');
const oneLinerJoke = require('one-liner-joke');

Subiex.registerCommand('joke', 'default', (message) => {
  message.channel.send(oneLinerJoke.getRandomJoke());
}, ['emoji', 'funny', 'hilarious'], 'Get a random joke!', '[]')
