"use strict";
var Subiex = require('../bot.js');
Subiex.registerCommand('dm', 'moderator', function (message, bot) {
    var msg = extractFirstText(message.content).trim();
    var userID = searchUser(message);
    var guildMember = message.channel.members.find('id', userID);
    var deleteMessage = message.guild
        .member(bot.user)
        .hasPermission('MANAGE_MESSAGES');
    console.log('Message sent to ' +
        guildMember.user.username +
        ' by ' +
        message.author.username +
        ' and the message is : ' +
        msg);
    if (deleteMessage)
        message.delete();
    guildMember.send(msg);
}, ['pm', 'direct'], 'Make the bot dm to someone', 'name "[Text Here]"');
function searchUser(message) {
    var textInDQuotes = extractFirstText(message.content).trim();
    var name = message.content.replace('"' + textInDQuotes + '"', '').trim();
    var userID = '';
    if (message.mentions.members.size != 0) {
        userID = args[0].replace('<', '');
        userID = userID.replace('>', '');
        userID = userID.replace('!', '');
    }
    else {
        for (var _i = 0, _a = message.guild.members.entries(); _i < _a.length; _i++) {
            var member = _a[_i];
            if (member[1].user.bot) {
                continue;
            }
            if (member[1].nickname != null &&
                member[1].nickname.toLowerCase().includes(name.toLowerCase())) {
                userID = member[0];
                return userID;
                break;
            }
            if (member[1].user.tag.toLowerCase().includes(name.toLowerCase())) {
                userID = member[0];
                return userID;
                break;
            }
        }
    }
}
function extractFirstText(str) {
    var matches = str.match(/"(.*?)"/);
    return matches ? matches[1] : str;
}
