"use strict";
var Subiex = require('../bot.js');
Subiex.registerCommand('eval', 'master', function (message, bot) {
    try {
        var output = eval(message.content);
        if (!message.content.includes('bot.token') ||
            !output.includes(bot.token)) {
            return '**Output:** ' + output;
        }
        else {
            return '**Output:** ' + 'Why-Token-Please-No';
        }
    }
    catch (error) {
        return '**Error:** ```' + error + '```';
    }
}, [], 'Execute code', '<code>');
