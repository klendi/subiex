import { bot, config, commands } from '../bot'

bot.on('message', message => {
  if (!message.author.bot && message.content.indexOf(config.prefix, 0) !== 0) {
    let command = message.content.substring(0, 1)

    for (const type in commands) {
    }
  }
})
