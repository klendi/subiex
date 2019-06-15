"use strict";
var Discord = require('discord.js');
var Subiex = require('../bot.js');
var oneLinerJoke = require('one-liner-joke');
Subiex.registerCommand('joke', 'default', function (message) {
    var joke = oneLinerJoke.getRandomJoke();
    message.channel.send({
        embed: {
            color: 9384170,
            description: joke.body
        }
    });
}, ['emoji', 'funny', 'hilarious'], 'Get a random joke!', '[]');
