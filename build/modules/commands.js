"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bot_1 = require("../bot");
bot_1.bot.on('message', function (message) {
    if (!message.author.bot && message.content.indexOf(bot_1.config.prefix, 0) !== 0) {
        var command = message.content.substring(0, 1);
    }
});
