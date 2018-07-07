/*
Copyright (c) 2017-2018 bananaprotocol

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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