"use strict";
var Subiex = require('../bot.js');
Subiex.registerCommand('speak', 'moderator', function (message, bot) {
    var myMention = message.mentions.users.array()[0];
    var myChannel = message.mentions.channels.array()[0];
    var deleteMessage = message.guild
        .member(bot.user)
        .hasPermission('MANAGE_MESSAGES');
    if (myChannel === undefined) {
        if (deleteMessage)
            message.delete();
        return 'Please mention a #channel so I know where to speak!';
    }
    var msg = message.content.replace(myChannel.id, '').replace('<#>', '');
    var channel = message.guild.channels.find('name', myChannel.name);
    if (myMention !== undefined) {
        msg = msg.replace(myMention.id, '').replace('<@>', '');
        msg = msg.replace('<@!>', '');
    }
    else {
        myMention = '';
    }
    if (deleteMessage)
        message.delete();
    if (msg === '')
        return "The message can't be empty!";
    channel.send(myMention + msg);
}, ['talk', 'say'], 'Make the bot speak to a given channel', '[to channel] <to member> [message]');
