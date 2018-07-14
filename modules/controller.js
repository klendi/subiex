const Discord = require('discord.js')
const mongoose = require('mongoose')
const Utils = require('../modules/utils')
const Server = require('../db/models/server')
const bot = new Discord.Client()
const config = require('../config')
const dotenv = require('dotenv')
dotenv.load()

var url = process.env.DB_URL
var prefix = ''

var Controller = {
  changePrefix: (prefix, message) => {
    let guild = message.guild
    Server.findOne({
      serverID: guild.id
    }).exec((err, server) => {
      if (!server) {
        message.channel.send(Utils.embedMessageError('This server does not exist in my database, to register this server to my database please run the command !registerserver'))
        return
      } else {
        server.serverPrefix = prefix

        server.save((err) => {
          message.channel.send(Utils.embedMessage('Succesfully changed the prefix to : ' + prefix))
          console.log('Successfully changed the prefix')
        })
      }
    })
  },
  registerServer: (message) => {
    let guild = message.guild
    Server.findOne({
      serverID: guild.id
    }).exec((err, server) => {
      if (!server) {
        console.log("Server don't exist in db")
        var server = new Server({
          serverID: guild.id,
          serverPrefix: '!',
          serverName: guild.name,
          moderatorRoles: ['Administrator', 'Mod', 'Subiex Manager']
        })

        server.save((err) => {
          console.log('Created it succesfully')
          message.channel.send(Utils.embedMessage('Succesfully registered ' + guild.name + ' server'))
        })
      } else {
        console.log('Server exist and server name is ' + server.serverName)
        message.channel.send(Utils.embedMessageError('This server already exist in my database'))
      }
    })
  }
}

module.exports = Controller
