const Discord = require('discord.js');
const Subiex = require('../bot.js');
const oneLinerJoke = require('one-liner-joke');

Subiex.registerCommand('joke', 'default', (message) => {
	
  var joke = oneLinerJoke.getRandomJoke();
  message.channel.send({embed: {
  color: 9384170,
  description: joke.body
}});

}, ['emoji', 'funny', 'hilarious'], 'Get a random joke!', '[]')
