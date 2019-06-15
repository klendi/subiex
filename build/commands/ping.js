"use strict";
var Discord = require('discord.js');
var Subiex = require('../bot.js');
Subiex.registerCommand('ping', 'default', function (message, bot) {
    message.channel.send('Pinging...').then(function (m) {
        m.edit("Pong! took `" + (m.createdTimestamp - message.createdTimestamp) + "`ms");
    });
}, ['response'], 'Bot Response Test', '[]');
