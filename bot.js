const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config')
const dotenv = require('dotenv')
var muted = false;
dotenv.load()

bot.on('ready', () => {
  console.log('Subiex is online')
  console.log('Subiex is ready')
  console.log('Subiex is unmuted')
})

bot.on('message', (message) => {
  if (message.content === config.prefix + "report") 
  {
    message.reply('I am online and working!')
    var time = Date.now()
    message.channel.send('Pew').then(m => m.edit('**PING TOOK : ' + (Date.now() - time) + ' ms**'))
    message.channel.send('This report was sent in :' + new Date());
  }
})

bot.on('message', (message) => {

	if (message.content === config.prefix + 'mute' && mute === false) 
	{
		message.reply('Okay boss :zipper_mouth: (MUTE MODE ON)')
		mute = true;
		console.log('Bot was muted , mute mode on')
	}
	else if (message.content === config.prefix + 'mute' && mute === true)
	{
		message.reply('Glad to be back (MUTE MODE OFF)!')
		mute = false;
		console.log('Mute mode is off')
	}
})

bot.on('message', (message) => {
	if (message.content.startsWith('!')) 
	{
		try
		{
			switch(message.content)
			{
				case config.prefix + 'report2':
					console.log('switch statement works XD')
					message.reply('**I am online and working!**')
    				var time = Date.now()
   					message.channel.send('Pew').then(m => m.edit('PING TOOK : **' + (Date.now() - time) + '** ms**'))
    				message.channel.send('This report was sent in :**' + new Date() + '** !');
					break;
				case config.prefix + 'help':
					message.reply('Help goes here ...')
					break;
			}
		}
		catch(ex){console.log('The error is at switch statement : ' + ex.stack)}
	}
})

bot.login(process.env.BOT_TOKEN)