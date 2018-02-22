const Discord = require('discord.js')
const Subiex = require('../bot.js')
const config = require('../config')

Subiex.registerCommand('remindme', 'default', (message, bot) => {
  var args = message.content.split(' ');
  message.react("☑");
  message.channel.send('Done, creating a task with ' + args[0] + ' Seconds');
}, ['remind'], 'Creates a reminder. Pass without args to start a guided tour.', '[]')

function createReminder(msg, timeInMinutes) {
  setTimeout(function() {

  }, 10);
}
