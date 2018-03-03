'use strict'
const Discord = require('discord.js');
const Subiex = require('../bot.js');
const ud = require('./urban-dictionary')

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

Subiex.registerCommand('urban', 'default', (message) => {
    let msg = message.content + '';

    ud.term(message.content, function(error, entries, tags, sounds) {
        if (error) {
            console.error(error.message)
            message.channel.send(error.message);
        } else {
            message.channel.send({
                embed: {
                    color: 9384170,
                    title: '**' + toTitleCase(entries[0].word) + '**',
                    fields: [{
                            name: "Definition",
                            value: toTitleCase(entries[0].definition)
                        },
                        {
                            name: 'Second Definition',
                            value: toTitleCase(entries[1].definition)
                        },
                         {
                            name: "**First Example**",
                            value: toTitleCase(entries[0].example)
                        },
                         {
                            name: "**Second Example**",
                            value: toTitleCase(entries[1].example)
                        },
                    ],
                }
            });
        }
    })

}, ['urban', 'urban', 'urban-dict'], 'Get urban dictionary word explanation!', '[]')