const Discord = require('discord.js')
const bot = new Discord.Client()
const dotenv = require('dotenv')

dotenv.load()

bot.on('ready', () => {
  console.log('Subiex is ready')
})

bot.on('message', (message) => {
  if (message.content === 'ping') 
  {
    message.reply('Ping')
  }
})

bot.login(process.env.BOT_TOKEN)