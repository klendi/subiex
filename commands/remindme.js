const Discord = require('discord.js')
const Subiex = require('../bot.js')
const config = require('../config')

Subiex.registerCommand('remindme', 'default', (message, bot) => {
    var args = message.content.split(' ');
    message.react("☑");
    var timeOut = args[0]
    var messageToSay = message.content.substring(7 + args[0].length, message.content.length);

    message.channel.send('Done, reminding u in ' + args[0]);
    createReminder(message, timeOut, messageToSay);
}, ['remind'], 'Creates a reminder. Pass without args to start a guided tour.', '[]')

function createReminder(msg, timeInMinutes, mesageToSay) {
  var timeToRemind = waitingTimeToMs(timeInMinutes);
  console.log("Started Waiting " + timeToRemind + " ms");
    setTimeout(function() {
      remind(msg, mesageToSay);
    }, timeToRemind);
}

function remind(msg, messageTosay) {
  msg.channel.send( "**" + msg.author + " REMINDER ALERT**" + messageTosay);
  console.log("Reminding now");
}

function waitingTimeToMs(timeOut) {
    var num = timeOut.substring(0, timeOut.length - 1);

    if (timeOut.endsWith('s')) {
        //seconds
        var s = Math.floor(num * 1000);
        return s;
    } 
    else if (timeOut.endsWith('m')) {
        //minutes
        var m = Math.floor(num * 60000);
        return m;
    } 
    else if (timeOut.endsWith('h')) {
        //hours
        var h = Math.floor(num * 3600000);
        return h;
    } 
    else if (timeOut.endsWith('d')) {
        //days
        var d = Math.floor(num * (3600000 * 24));
        return d;
    }
}