'use strict';
var Subiex = require('../bot.js');
var http = require('http');
Subiex.registerCommand('urban', 'default', function (message) {
    var msg = message.content + '';
    term(msg, function (error, entries) {
        if (error) {
            console.error(error.message);
            message.channel.send(error.message);
        }
        else {
            if (entries.length == 1) {
                message.channel.send({
                    embed: {
                        color: 9384170,
                        title: '**' + entries[0].word + '**',
                        fields: [
                            {
                                name: 'Definition',
                                value: entries[0].definition
                            },
                            {
                                name: '**Example**',
                                value: entries[0].example
                            }
                        ]
                    }
                });
            }
            else if (entries.length > 1) {
                if (entries[0].definition.length < 1024 &&
                    entries[1].definition.length < 1024 &&
                    entries[0].example.length < 1024 &&
                    entries[0].example.length < 1024) {
                    message.channel.send({
                        embed: {
                            color: 9384170,
                            title: '**' + entries[0].word + '**',
                            fields: [
                                {
                                    name: 'Definition',
                                    value: entries[0].definition
                                },
                                {
                                    name: 'Second Definition',
                                    value: entries[1].definition
                                },
                                {
                                    name: '**First Example**',
                                    value: entries[0].example
                                },
                                {
                                    name: '**Second Example**',
                                    value: entries[1].example
                                }
                            ]
                        }
                    });
                }
                else {
                    console.log('Error');
                    console.log('Length of entries[0].definition ' + entries[0].definition.length);
                    console.log('Length of entries[1].definition ' + entries[1].definition.length);
                    console.log('Length of entries[1].example ' + entries[1].example.length);
                    console.log('Length of entries[0].example ' + entries[0].example.length);
                }
            }
        }
    });
}, ['urban', 'urban', 'urban-dict'], 'Get urban dictionary word explanation!', '[]');
function get(url, callback) {
    http.get(url, function (result) {
        var contentType = result.headers['content-type'];
        var statusCode = result.statusCode;
        var error;
        if (statusCode !== 200) {
            error = new Error('Unable to send request for definitions. Status code: ' + statusCode);
        }
        else if (contentType.indexOf('application/json') === -1) {
            error = new Error("Content retrieved isn't JSON. Content type: '" + contentType + "'");
        }
        if (error) {
            result.resume();
            callback(error);
            return;
        }
        result.setEncoding('utf8');
        var rawData = '';
        result.on('data', function (buffer) {
            rawData += buffer;
        });
        result.on('end', function () {
            try {
                callback(null, JSON.parse(rawData));
            }
            catch (error) {
                callback(new Error('Failed to parse retrieved Urban Dictionary JSON.'));
                console.log('rawData is: ' + rawData);
            }
        });
    });
}
function term(word, callback) {
    get('http://api.urbandictionary.com/v0/define?term=' + encodeURIComponent(word), function (error, result) {
        if (error) {
            callback(error);
            return;
        }
        if (!result) {
            callback(new Error(word + ' is undefined.'));
            return;
        }
        callback(null, result.list);
    });
}
