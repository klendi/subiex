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
			var text = generateLoremText(args[1])
			message.reply('```' + text + '```')
		}
	}
})









/////////////////////////LOREM IPSUM GENERATOR TEST//////////////////
try
{

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLoremText(num) {
var points = [',', '.', '?', '!', '?!']
	var wordsArray = []
		
var loremText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, sunt laborum eum adipisci odio doloribus sit officia expedita. Nihil porro hic, sint voluptate unde accusantium molestias tenetur, laudantium reprehenderit amet dolore voluptas? Laudantium sunt autem aliquam nesciunt maxime nostrum ipsum alias doloribus. Numquam animi veniam impedit recusandae, deserunt facere. Debitis.";
	wordsArray = loremText.split(' ')
	
	var word = ""

	for (var i = 0; i < num; i++) {
		if(i === 1)
		{
			word += "Lorem"
			word += " ipsum "
		}

		if (i > 2) {
			var wArray = [] 
			wArray = wordsArray.join(' ')
			word += wArray[getRandom(2, num)]
			var rand = getRandom(1, 10)
			if (rand === 10)
			{
				word += points[getRandom(0, points.length)]
			}
		}
	}

	return word;
}
}
catch(ex) {
console.log('Error at lorem ipsum generator ' + ex.stack)
}
/////////////////////////////////////////////

bot.login(process.env.BOT_TOKEN)