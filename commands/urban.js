const Discord = require('discord.js');
const Subiex = require('../bot.js');
const ud = require('urban-dictionary')

Subiex.registerCommand('urban', 'default', (message) => {
	var word = message.content.substring(6);

    ud.term(word, function(error, entries, tags, sounds) {
        if (error) {
            console.error(error.message)
        } else {
            message.channel.send({
                embed: {
                    author: {
                        name: msg.author.username,
                        icon_url: msg.author.avatarURL
                    },
                    color: 9384170,
                    title: entries[0].word,
                    description: "**" + entries[0].definition + "**",
                    fields: [{
                            name: "Word",
                            value: entries[0].definition
                        },
                        {
                            name: "Example",
                            value: entries[0].example
                        },
                    ],
                }
            });
            console.log(entries[0].word)
            console.log(entries[0].definition)
            console.log(entries[0].example)
        }
    })

}, ['urban', 'urban', 'urban-dict'], 'Get urban dictionary word explanation!', '[]')