const Discord = require('discord.js')
const Subiex = require('../bot.js')

Subiex.registerCommand('spam', 'default', (message, bot) => {
  let num = parseInt(message.content);

  for (var i = 0; i < num; i++) {
  	message.channel.send(":huehuehue:, " + message.author);
  }
}, ['spam'], 'Spam', '[]')
