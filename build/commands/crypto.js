"use strict";
var Subiex = require('../bot.js');
var request = require('request');
var Util = require('util');
Subiex.registerCommand('crypto', 'default', function (message, bot) {
    var symbols = message.content.split(' ').map(function (x) {
        return x.toUpperCase();
    });
    var fromSymbol = symbols.shift();
    if (symbols.length === 0)
        symbols.push('USD');
    CrytpoComparePrice(fromSymbol, symbols, message);
}, ['crypt', 'price'], 'Get latest crypto exchange price in USD, or in other cryptos.', '<crypto-currency ticker> (crypto-currency ticker )');
function CrytpoComparePrice(fsym, tsyms, message) {
    var cryptoComparePrice = 'https://min-api.cryptocompare.com/data/price?fsym=' +
        fsym +
        '&tsyms=' +
        tsyms;
    request(cryptoComparePrice, function (error, response, body) {
        if (error)
            message.channel.send('Not a valid crypto currency, try BTC or ETH.');
        var finalMessage = '**~~------~~** __Current exchange rates for 1 ' +
            fsym +
            '__ **~~------~~**\n```';
        try {
            var responseBody = JSON.parse(body);
            for (var sym = 0; sym < tsyms.length; sym++) {
                var price = responseBody[tsyms[sym]];
                if (price === undefined)
                    price = '¯\\_(ツ)_/¯';
                if (tsyms[sym] === 'USD')
                    price = '$' + price;
                finalMessage += Util.format('%s %s\n', pad('.............', tsyms[sym], false), price);
            }
            message.channel.send(finalMessage + '```');
        }
        catch (error) {
            message.channel.send('<:doggo:328259712963313665>' +
                ' Not a valid crypto-currency, try BTC or ETH.');
        }
    });
}
function pad(pad, str, padLeft) {
    if (typeof str === 'undefined')
        return pad;
    if (padLeft)
        return (pad + str).slice(-pad.length);
    else
        return (str + pad).substring(0, pad.length);
}
