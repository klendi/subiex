const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs')
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
			}
			catch(ex){console.log('The error is at switch statement : ' + ex.stack)}
		}
})

exports.bot = bot
exports.config = config

newCommand = function (name, type, callback, aliases, description, usage) 
{
  exports.commands[type][name] = {}
  exports.commands[type][name]['aliases'] = aliases
  exports.commands[type][name]['description'] = description
  exports.commands[type][name]['usage'] = usage
  exports.commands[type][name]['process'] = callback
}

function LoadScript(path, reload) 
{
	var pathReq = require(path)

	if (reload) 
	{
		console.log('Reloaded script @ ' + path)
	} 
	else
	{
		console.log('Loaded script @ ' + path)
	}
}


exports.newCommand = newCommand
exports.LoadScript = LoadScript

//Loading all the scripts from ./scripts/ directory
var scripts = fs.readdirSync('./scripts/')
scripts.forEach(script => {
  if (script.substring(script.length - 3, script.length) === '.js') 
  {
    exports.LoadScript('./scripts/' + script)
  }
})


bot.login(process.env.BOT_TOKEN)