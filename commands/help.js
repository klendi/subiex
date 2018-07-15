const Discord = require('discord.js')
const Subiex = require('../bot.js')
const client = new Discord.Client();
const config = require('../config.json')

Subiex.registerCommand('help', 'default', (message, bot) => {
    let commands = Subiex.commands
    let cmds = {
        master: [],
        moderator: [],
        default: [],
        dm: []
    }

    for (let loopCmdType in commands) {
        for (let loopCmd in commands[loopCmdType]) {
            cmds[loopCmdType].push(loopCmd)
        }
    }

    for (let loopCmdType in cmds) { cmds[loopCmdType].sort() }

    let mastercmds = Object.keys(cmds['master']).length
    let modcmds = Object.keys(cmds['moderator']).length
    let defaultcmds = Object.keys(cmds['default']).length
    let dmcmds = Object.keys(cmds['dm']).length

    message.channel.send({
        embed: {
            color: 9384170,
            title: "Subiex Help",
            fields: [{
                    name: 'Information',
                    value: 'Bot prefix : **!**\nServing in **' + bot.guilds.size + '** servers\n' + 'Created by **Klendi**\n' + 'Want to add a command? Make a pull request (https://github.com/klendi/subiex)\n\n'  ,
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
                },
            ],
        }
    });
}, ['cmds', 'commands', 'commandlist'], 'List all commands', '[]')