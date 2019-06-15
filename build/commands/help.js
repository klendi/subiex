"use strict";
var Discord = require('discord.js');
var Subiex = require('../bot.js');
var client = new Discord.Client();
var config = require('../config.json');
Subiex.registerCommand('help', 'default', function (message, bot) {
    var commands = Subiex.commands;
    var cmds = {
        master: [],
        moderator: [],
        default: [],
        dm: []
    };
    for (var loopCmdType in commands) {
        for (var loopCmd in commands[loopCmdType]) {
            cmds[loopCmdType].push(loopCmd);
        }
    }
    for (var loopCmdType in cmds) {
        cmds[loopCmdType].sort();
    }
    var mastercmds = Object.keys(cmds['master']).length;
    var modcmds = Object.keys(cmds['moderator']).length;
    var defaultcmds = Object.keys(cmds['default']).length;
    var dmcmds = Object.keys(cmds['dm']).length;
    message.channel.send({
        embed: {
            color: 9384170,
            title: 'Subiex Help',
            fields: [
                {
                    name: 'Information',
                    value: 'Bot prefix : **!**\nServing in **' +
                        bot.guilds.size +
                        '** servers\n' +
                        'Created by **Klendi**\n' +
                        'Want to add a command? Make a pull request (https://github.com/klendi/subiex)\n\n'
                },
                {
                    name: 'Commands **(' + defaultcmds + ')**',
                    value: '```' + cmds['default'].join(' \n') + ' ```\n'
                },
                {
                    name: 'Moderator Commands **(' + modcmds + ')**',
                    value: '```' + cmds['moderator'].join(' \n') + ' ```\n'
                },
                {
                    name: 'Master Commands **(' + mastercmds + ')**',
                    value: '```' + cmds['master'].join(' \n') + ' ```\n'
                }
            ]
        }
    });
}, ['cmds', 'commands', 'commandlist'], 'List all commands', '[]');
