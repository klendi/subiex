const Discord = require('discord.js')
const Subiex = require('../bot.js')
const config = require('../config')

Subiex.registerCommand('spam', 'default', (message, bot) => {
  let num = parseInt(message.content);
  
if(message.author.id == config.master)
{
  for (var i = 0; i < num; i++) {
  	message.channel.send(":huehuehue:, " + message.author);
  }
}
else
{
	message.channel.send("You don't have permissions, only Klendi Have ")
}
}, ['spam'], 'Spam', '[]')
