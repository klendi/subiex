const Discord = require('discord.js');
const Subiex = require('../bot.js');
const oneLinerJoke = require('one-liner-joke');

Subiex.registerCommand('joke', 'default', (message) => {
  console.log(oneLinerJoke.getRandomJoke());
  var oneLinerJoke1 = oneLinerJoke.getRandomJoke();
  console.log(oneLinerJoke1);
  message.channel.send(oneLinerJoke1);
}, ['emoji', 'funny', 'hilarious'], 'Get a random joke!', '[]')
