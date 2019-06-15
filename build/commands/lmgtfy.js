"use strict";
var Discord = require('discord.js');
var Subiex = require('../bot.js');
Subiex.registerCommand('lmgtfy', 'default', function (message, bot) {
    if (message.content.length == 0) {
        message.channel.send({
            embed: {
                color: 0xfc1846,
                description: '**' + 'Error, empty argument' + '**'
            }
        });
        return;
    }
    message.channel.send(':zap: *Furiously Googles* :zap: ');
    message.channel.send('http://lmgtfy.com/?q=' + encodeURIComponent(message));
}, ['lmgtfy', 'google'], 'Generate a let me google it for you link', '<expression>');
