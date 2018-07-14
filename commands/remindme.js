const Discord = require('discord.js')
const Subiex = require('../bot.js')
const config = require('../config')

Subiex.registerCommand('remind', 'default', (message, bot) => {
  var args = message.content.split(' ')
  message.react('☑')
  var timeOut = args[0]
  console.log("Arg is '" + args[0] + "'")
  var messageToSay = message.content.substring(args[0].length, message.content.length)
  console.log('Message to say is ' + messageToSay)
  message.channel.send('Got it, pinging you in ' + args[0])
  createReminder(message, timeOut, messageToSay)
}, ['remind'], 'Creates a reminder. Pass without args to start a guided tour.', '[]')

function createReminder (msg, timeInMinutes, mesageToSay) {
  var timeToRemind = waitingTimeToMs(timeInMinutes)
  console.log('Started Waiting ' + timeToRemind + ' ms')
  setTimeout(function () {
    remind(msg, mesageToSay)
  }, timeToRemind)
}

function remind (msg, messageTosay) {
  msg.channel.send('Hey, ' + msg.author)
  msg.channel.send({
    embed: {
      author: {
        name: msg.author.username,
        icon_url: msg.author.avatarURL
      },
      color: 9384170,
      title: 'Reminder Alert: Your Message',
      description: '**' + messageTosay + '**',
      timestamp: new Date()
    }
  })

  console.log('Reminding now')
}

function waitingTimeToMs (timeOut) {
  var num = timeOut.substring(0, timeOut.length - 1)

  if (timeOut.endsWith('s')) {
    // seconds
    var s = Math.floor(num * 1000)
    return s
  } else if (timeOut.endsWith('m')) {
    // minutes
    var m = Math.floor(num * 60000)
    return m
  } else if (timeOut.endsWith('h')) {
    // hours
    var h = Math.floor(num * 3600000)
    return h
  } else if (timeOut.endsWith('d')) {
    // days
    var d = Math.floor(num * (3600000 * 24))
    return d
  }
}
