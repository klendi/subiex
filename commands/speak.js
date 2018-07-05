//Created by GlassToeStudio
//This software includes some portions of the project Confax 
//(https://github.com/bananaprotocol/confax), which is licensed under the MIT License.

const Subiex = require('../bot.js')

Subiex.registerCommand('speak', 'moderator', (message, bot) => {
  let myMention = message.mentions.users.array()[0]
  let myChannel = message.mentions.channels.array()[0]
  let deleteMessage = message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')
  if (myChannel === undefined) {
    if (deleteMessage) message.delete()
    return ('Please mention a #channel so I know where to speak!')
  }

  let msg = message.content.replace(myChannel.id, '').replace('<#>', '')
  let channel = message.guild.channels.find('name', myChannel.name)

  if (myMention !== undefined) {
    msg = msg.replace(myMention.id, '').replace('<@>', '')
    msg = msg.replace('<@!>', '') // If user has a nickname
  } else { myMention = '' }

  if (deleteMessage) message.delete()
  if (msg === '') return "The message can't be empty!"
  channel.send(myMention + msg)
}, ['talk', 'say'], 'Make the bot speak to a given channel', '[to channel] <to member> [message]')