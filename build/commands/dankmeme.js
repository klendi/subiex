"use strict";
var Subiex = require('../bot.js');
var Discord = require('discord.js');
var https = require('https');
var url = 'https://www.reddit.com/r/dankmemes/hot/.json?limit=100';
Subiex.registerCommand('meme', 'default', function (message, bot) {
    https.get(url, function (result) {
        var body = '';
        result.on('data', function (chunk) {
            body += chunk;
        });
        result
            .on('end', function () {
            var response = JSON.parse(body);
            var index = response.data.children[Math.floor(Math.random() * 99) + 1].data;
            if (index.post_hint !== 'image') {
                var text = index.selftext;
                var textembed = new Discord.RichEmbed()
                    .setTitle(subRedditName)
                    .setColor(9384170)
                    .setDescription("[" + title + "](" + link + ")\n\n" + text)
                    .setURL("https://reddit.com/" + subRedditName);
                message.channel.send(textembed);
            }
            var image = index.preview.images[0].source.url;
            var title = index.title;
            var link = 'https://reddit.com' + index.permalink;
            var subRedditName = index.subreddit_name_prefixed;
            if (index.post_hint !== 'image') {
                var textembed = new Discord.RichEmbed()
                    .setTitle(subRedditName)
                    .setColor(9384170)
                    .setDescription("[" + title + "](" + link + ")\n\n" + text)
                    .setURL("https://reddit.com/" + subRedditName);
                message.channel.send(textembed);
            }
            var imageembed = new Discord.RichEmbed()
                .setTitle(subRedditName)
                .setImage(image)
                .setColor(9384170)
                .setDescription("[" + title + "](" + link + ")")
                .setURL("https://reddit.com/" + subRedditName);
            message.channel.send(imageembed);
        })
            .on('error', function (e) {
            console.log('Got an error: ', e);
        });
    });
}, ['dank', 'dankmeme'], 'Generate Random memes', '');
