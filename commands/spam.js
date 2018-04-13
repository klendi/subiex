const Discord = require('discord.js')
const Subiex = require('../bot.js')
const config = require('../config')

Subiex.registerCommand('spam', 'default', (message, bot) => {
    // let num = parseInt(message.content);
    let mentioned = message.mentions.users.array()[0]
    let args = message.content.split(' ');
    let num = 0;

    if (mentioned === undefined && args.length <= 1) {
        console.log("No user was mentioned")
        num = parseInt(message.content);
        if (num !== undefined)
            mention(message, message.author, num)
    } else {
        let name = mentioned.username
        num = parseInt(args[1]);
        console.log("About to spam " + name + " " + num + " times by " + message.author.username);
        mention(message, mentioned, num);
    }
}, ['spam'], 'Spam', '[]')

function mention(message, mention, num) {
    if (num <= 50) {
        if (mention.id == config.botID) {
            message.reply("You can't spam me muhfacka :sunglasses: , as a result u earned 10 free spams by me xD");
            for (var i = 0; i < 10; i++) {
                message.channel.send('You muhfacka ' + message.author);
            }
            return;
        }
        message.channel.send(" :regional_indicator_r: :regional_indicator_i: :regional_indicator_p: :skull:" + mention +  ", " +  num + " spam's incoming! Just a little gift by " + message.author);
        for (var i = 0; i < num; i++) {
            message.channel.send(':robot: Let me Spam ur ass ' + mention);
        }
    } else if (num > 51) {
        message.channel.send("You can't ping someone or yourself more than 50 times!");
    } else {
        message.channel.send("No valid input was given!");
    }
}