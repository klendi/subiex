"use strict";
var Discord = require('discord.js');
var Subiex = require('../bot.js');
Subiex.registerCommand('uptime', 'default', function (message, bot) {
    var ms = bot.uptime;
    var cd = 24 * 60 * 60 * 1000;
    var ch = 60 * 60 * 1000;
    var cm = 60 * 1000;
    var cs = 1000;
    var days = Math.floor(ms / cd);
    var dms = days * cd;
    var hours = Math.floor((ms - dms) / ch);
    var hms = hours * ch;
    var minutes = Math.floor((ms - dms - hms) / cm);
    var mms = minutes * cm;
    var seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    if (hours === 24) {
        days++;
        hours = 0;
    }
    var dateStrings = [];
    if (days === 1) {
        dateStrings.push('**1** day');
    }
    else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }
    if (hours === 1) {
        dateStrings.push('**1** hour');
    }
    else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }
    if (minutes === 1) {
        dateStrings.push('**1** minute');
    }
    else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }
    if (seconds === 1) {
        dateStrings.push('**1** second');
    }
    else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }
    var dateString = '';
    for (var i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString =
            dateString.slice(0, dateString.length - 2) +
                dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    return '**Uptime:** ' + dateString;
}, [], 'View the current uptime of Subiex', '[]');
