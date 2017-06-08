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

function pluck(array) {
	return array.map(function item() {return item["name"];})
}

function hasRole(person, role) {
	if(pluck(person.roles).includes(role))
		return true;
	else
		return false;
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

	if(isCommand('say', message)) {
		if(hasRole(message.member, 'Admin'))
		{
			if(args.length === 1)
				message.reply("You didn't define a argument, ```USE: !say [text to say]```");
			else
				message.channel.send(args.join(' '.substring(5)));
		}
		else
			message.reply("You don't have permissions to execute this command , you are not a **Admin**")
	}
})




bot.login(process.env.BOT_TOKEN)