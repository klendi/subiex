const Subiex = require('../bot.js')

Subiex.registerCommand('dm', 'moderator', (message, bot) => {
    let msg = extractFirstText(message.content).trim()
    let userID = searchUser(message)
    let guildMember = message.channel.members.find('id', userID)
    let deleteMessage = message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')

    console.log("Message sent to " + guildMember.user.username + " by " + message.author.username + " and the message is : " + msg)

    if (deleteMessage) message.delete()

    guildMember.send(msg)


}, ['pm', 'direct'], 'Make the bot dm to someone', 'name "[Text Here]"')

function searchUser(message) {
    let textInDQuotes = extractFirstText(message.content).trim()
    let name = message.content.replace('"' + textInDQuotes + '"', '').trim()

    var userID = ''
    if (message.mentions.members.size != 0) {
        userID = args[0].replace('<', '')
        userID = userID.replace('>', '');
        userID = userID.replace('!', ''); // if user has username  
    } else {
        for (var member of message.guild.members.entries()) {
            if (member[1].user.bot) { continue }
            if (member[1].nickname != null && member[1].nickname.toLowerCase().includes(name.toLowerCase())) {
                userID = member[0]

                return userID
                break
            }
            if (member[1].user.tag.toLowerCase().includes(name.toLowerCase())) {
                userID = member[0]

                return userID
                break
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