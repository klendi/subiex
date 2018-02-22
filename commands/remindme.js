const Discord = require('discord.js')
const Subiex = require('../bot.js')
const config = require('../config')

Subiex.registerCommand('remindme', 'default', (message, bot) => {
  message.react("☑");
  message.channel.send('Done');
}, ['remind'], 'Creates a reminder. Pass without args to start a guided tour.', '[]')
