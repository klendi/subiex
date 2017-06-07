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
				
				if(message.content.startsWith('!say'))
				{
					var partToSay = message.content.split(" ")
					message.reply(partToSay[2])
				}
				if(message.content.startsWith('!math'))
				{
					var result
					try
					{
						var partToCalc = message.content.split(" ")
						result = math.eval(partToCalc[2])
						message.reply('Result : ' + result)
					}
					catch
					{
						console.log('Failed to do math calc ' + message.content + ' ')
						message.reply('Invalid Calculation Expression')
					}
					finally
					{
						if (isNaN(parseFloat(result))) 
						{
      						return 'Invalid Calculation Expression'
   						} 
   						else 
   						{
     						 return 'Result ':  + result
    					}
					}
				}
			}
			catch(ex){console.log('The error is at switch statement : ' + ex.stack)}
		}
})




bot.login(process.env.BOT_TOKEN)