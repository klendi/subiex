const Subiex = require('../bot.js')

Subiex.registerCommand('dm', 'moderator', (message, bot) => {
    let isDM = message.channel.type === 1
    console.log("is DM " + isDM)
    // let myChannel = message.mentions.channels.array()[0]
    // let deleteMessage = message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')
    // if (myChannel === undefined) {
        // if (deleteMessage) message.delete()
        // return ('Please mention a #channel so I know where to speak!')
    // }

    // let msg = message.content.replace(myChannel.id, '').replace('<#>', '')
    // let channel = message.guild.channels.find('name', myChannel.name)

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
    let textInDQuotes = extractFirstText(message.content).trim()
    let name = message.content.replace('"' + textInDQuotes + '"', '').trim()

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