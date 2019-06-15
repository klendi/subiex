"use strict";
var Utils = {
    embedMessage: function (text) {
        return {
            embed: {
                color: 9384170,
                description: text
            }
        };
    },
    embedMessageError: function (text) {
        return {
            embed: {
                color: 0xfc1846,
                description: text
            }
        };
    },
    bold: function (text) {
        return "**" + text + "**";
    },
    italic: function (text) {
        return "*" + text + "*";
    },
    code: function (text) {
        return '```' + text + '```';
    }
};
module.exports = Utils;
