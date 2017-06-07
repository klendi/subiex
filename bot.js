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
    message.channel.sendMessage('With **PING : ' + Date.now() - time + ' ms**')
    message.channel.sendMessage('The time is :' + Date.now())
  }
})

bot.login(process.env.BOT_TOKEN)