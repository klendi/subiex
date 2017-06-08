const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs')
const math = require('mathjs')
const config = require('./config')
const dotenv = require('dotenv')
dotenv.load()

bot.on('ready', () =>  {
  console.log('Subiex is online')
  console.log('Subiex is ready')
})

function isCommand(str, message) {
	return message.content.toLowerCase().startsWith(config.prefix + str) 
}

/*bot.on('message', (message) =>  {
	if(message.content.startsWith(config.prefix))
	{
			try {
				switch (message.content) {
					case config.prefix + 'report':
						message.reply('I am online and working!')
	    				var time = Date.now()
	   					message.channel.send('Pew').then(m => m.edit('PING TOOK : **' + (Date.now() - time) + '** ms'))
	    				message.channel.send('This report was sent in :```' + new Date() + '```'); 
						break; 
					case config.prefix + 'help':
						message.reply('Help goes here ...')
						break;
					case config.prefix + 'hello':
						message.channel.send('Hello there ' + message.author.username)
						break;
					
					default:
						message.reply('**INVALID COMMAND**')
				}
				
			}
			catch(ex) {console.log('The error is at switch statement : ' + ex.stack)}
	}
})*/

bot.on('message', (message) => {
	var args = message.content.split(/[ ]+/)
	
	if(isCommand('lorem', message)) {
	
		if(args.length === 1 || args.length > 2)
		{
			message.reply('Please define a argument for lorem command , ```Usage : lorem [paragraphs number]```');
		} 
		else if(args.length === 2) 
		{
			message.channel.send('Lorem ipsum text ready to paste')
			message.reply('```Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quisquam dolores vero, laboriosam. Modi, quidem optio ea tenetur a atque eligendi saepe ipsum ratione laboriosam culpa vitae excepturi temporibus eum consequatur velit, reprehenderit harum, nesciunt incidunt minima molestias illum eveniet ipsa doloremque! Aliquam nobis fugiat dignissimos, iure voluptas dolorem perspiciatis.```')
		}
	}
})

bot.login(process.env.BOT_TOKEN)