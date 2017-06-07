const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config')
const dotenv = require('dotenv')

dotenv.load()

bot.on('ready', () => {
  console.log('Subiex is ready')
})

bot.on('message', (message) => {
  if (message.content === config.prefix + "report") 
  {
    message.reply('I am online and working!')
    var time = Date.now()
    message.channel.sendMessage('Pew').then(m => m.edit('**PING TOOK : ' + (Date.now() - time) + ' ms**'))
    message.channel.sendMessage('This report was sent in :' + new Date());
  }
})

bot.login(process.env.BOT_TOKEN)