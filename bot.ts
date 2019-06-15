import Discord from 'discord.js'
import fs from 'fs'
import config from './config'
import dotenv from 'dotenv'
import chalk from 'chalk'
dotenv.load()

const bot = new Discord.Client()

type CommandType = {
  [id: string]: Object
  master: CommandList
  moderator: CommandList
  default: CommandList
  dm: CommandList
}

type ModTypes = 'master' | 'moderator' | 'default' | 'dm'

type CommandList = {
  [id: string]: Command
}

type Command = {
  [id: string]: Object | undefined
  callback?: Function
  aliases?: [String]
  description?: String
  usage?: String
}
const commands: CommandType = {
  master: {},
  default: {},
  dm: {},
  moderator: {}
}

function addCommand(
  name: string,
  type: ModTypes,
  callback: Function,
  aliases?: [String] | [''],
  description?: string,
  usage?: string
) {
  commands[type][name] = {}
  commands[type][name]['aliases'] = aliases
  commands[type][name]['description'] = description
  commands[type][name]['usage'] = usage
  commands[type][name]['process'] = callback
}

function loadScript(path: string) {
  require(path)
  console.log(chalk.green('Script loaded at ' + path))
}

function loadScripts() {
  let commands = fs.readdirSync('./commands/')
  console.log('commands are', commands)

  commands.map(script => {
    let scriptExt = script.substring(script.length - 3, script.length)
    let scriptName = script.substring(0, script.length - 3)
    if (scriptExt === '.js') {
      loadScript('./commands/' + scriptName)
    }
  })
}

loadScripts()

bot.on('ready', () => {
  console.log('Subiex is online')

  bot.user.setActivity('!help to begin', {
    type: 'STREAMING',
    url: 'https://www.twitch.tv/klendi'
  })
})

export { bot, config, commands, addCommand }

bot.login(process.env.BOT_TOKEN)
