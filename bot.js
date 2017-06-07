const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs')
const math = require('mathjs')
const config = require('./config')
const dotenv = require('dotenv')
dotenv.load()

bot.on('ready', () => {
  console.log('Subiex is online')
  console.log('Subiex is ready')
})

bot.on('message', (message) => {
		if (message.content.startsWith(config.prefix)) 
		{
			if (message.content.startsWith(config.prefix + 'math')) 
			{
				var partToCalc = message.content.split(' ')
				message.reply(partToCalc[2])
				console.log('Part to calculate is ' + partToCalc[2])
			}
			try
			{
				switch(message.content)
				{
					case config.prefix + 'report':
						message.reply('I am online and working!')
	    				var time = Date.now()
	   					message.channel.send('Pew').then(m => m.edit('PING TOOK : **' + (Date.now() - time) + '** ms'))
	    				message.channel.send('This report was sent in :```' + new Date() + '```');
						break;
					case config.prefix + 'help':
						message.reply('Help goes here ...')
						break;
					
					default:
						message.reply('**INVALID COMMAND**')
				}
				
			}
			catch(ex){console.log('The error is at switch statement : ' + ex.stack)}
		}
})




bot.login(process.env.BOT_TOKEN)