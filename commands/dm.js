const Subiex = require('../bot.js')

Subiex.registerCommand('dm', 'moderator', (message, bot) => {

    // let myMention = searchUser(message, message.content)
    // let deleteMessage = message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')

    // let msg = extractFirstText(message.content)
    // let channel = message.guild.channels.find('name', myChannel.name)

    // if (myMention !== undefined) {
    //     msg = msg.replace(myMention.id, '').replace('<@>', '')
    //     msg = msg.replace('<@!>', '') // If user has a nickname
    // } else { myMention = '' }

    // if (deleteMessage) message.delete()
    // if (msg === '') return "The message can't be empty!"


    // channel.send(myMention + msg)
    searchUser(message, message.content)
}, ['pm', 'direct'], 'Make the bot speak to a given channel', '[to channel] <to member> [message]')

function searchUser(message) {
    let textInDQuotes = extractFirstText(message.content)
    let name = message.content.replace('"' + textInDQuotes + '"', '')
    console.log("textInDQuotes is " +  textInDQuotes)
    console.log("name is " + name)

    var receiver_id = "";
    if (message.mentions.members.size != 0) {
        receiver_id = args[0].replace("<@", "");
        receiver_id = receiver_id.replace(">", "");
        receiver_id = receiver_id.replace("!", ""); // if user has username  
    } else {
        for (var entry of message.guild.members.entries()) {
            if (entry[1].user.bot) { continue; }
            if (entry[1].nickname != null && entry[1].nickname.toLowerCase().includes(name.toLowerCase())) {
                receiver_id = entry[0];

                return receiver_id;
                break;
            }
            if (entry[1].user.tag.toLowerCase().includes(name.toLowerCase())) {
                receiver_id = entry[0];

                return receiver_id;
                break;
            }
        }
    }
}

function extractFirstText(str) {
    const matches = str.match(/"(.*?)"/);
    return matches ?
        matches[1] :
        str;
}