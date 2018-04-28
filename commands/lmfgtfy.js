const Discord = require('discord.js')
const Subiex = require('../bot.js')

Subiex.registerCommand('lmfgtfy', 'default', (message, bot) => {
    if (message.content.length == 0) {
        message.channel.send({
            embed: {
                color: 0xfc1846,
                description: '**' + 'Error, empty argument' + '**',
            }
        });
        return;
    }
    message.channel.send(":zap: *Furiously starts googling because you are too lazy to do that* :vampire:")
    message.channel.send('http://lmfgtfy.com/?q=' + encodeURIComponent(message))
}, ['lmgtfy', 'fgoogle'], 'Generate a let me fucking google it for you link', '<expression>')