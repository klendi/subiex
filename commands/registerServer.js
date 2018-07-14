const Subiex = require('../bot.js')
const Controller = require('../modules/controller.js')
const Utils = require('../modules/utils')
const config = require('../config')

Subiex.registerCommand('register', 'moderator', (message, bot) => {
    if (message.author.id === message.guild.ownerID || message.author.id === config.master) {
        Controller.registerServer(message)
    } else {
        message.channel.send(Utils.embedMessageError('Only server owner has the permission to register this server to the database.'))
    }
}, ['registerserver', ''], 'Register server to db to unlock subiex customisations')