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

path = require('/scripts/');

function getDirectories(srcpath) 
{
    return fs.readdirSync(srcpath).filter(function(file) 
    {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

var plugin_folders;
var plugin_directory;
var exec_dir;
try 
{
    plugin_directory = "scripts/";
    plugin_folders = getDirectories(plugin_directory);
} 
catch(e)
{
    exec_dir = path.dirname(process.execPath); //need this to change node prefix for npm installs
    plugin_directory = path.dirname(process.execPath) + "scripts/";
    plugin_folders = getDirectories(plugin_directory);
}

function load_plugins()
{
    var bot = require("bot.js");
    var commandCount = 0;
    for (var i = 0; i < plugin_folders.length; i++) 
    {
        var plugin;
        try
        {
            plugin = require(plugin_directory + plugin_folders[i])
        } 
        catch (err)
        {
            console.log("Improper setup of the '" + plugin_folders[i] +"' plugin. : " + err);
        }
        if (plugin)
        {
            if("commands" in plugin)
            {
                for (var j = 0; j < plugin.commands.length; j++) 
                {
                    if (plugin.commands[j] in plugin)
                    {
                        bot.addCommand(plugin.commands[j], plugin[plugin.commands[j]])
                        commandCount++;
                    }
                }
            }
        }
    }
    console.log("Loaded " + bot.commandCount() + " chat commands")
}





bot.login(process.env.BOT_TOKEN)