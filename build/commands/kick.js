"use strict";
var Discord = require('discord.js');
var Subiex = require('../bot.js');
Subiex.registerCommand('kick', 'moderator', function (message, bot) {
    var mention = message.mentions.users.array()[0];
    var kickPerms = message.guild.member(bot.user).hasPermission('KICK_MEMBERS');
    if (mention === null) {
        return 'Please mention a user, that you would like to kick.';
    }
    else {
        if (!kickPerms) {
            return "Subiex doesn't have enough permissions to kick any user.";
        }
        else {
            var kickable = message.guild.member(mention).kickable;
            if (!kickable) {
                return mention + " isn't kickable.";
            }
            else {
                message.guild.member(mention).kick();
                return mention + ' has been kicked.';
            }
        }
    }
}, [], 'Kick a user from the server', '<mention>');
