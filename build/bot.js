"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(require("discord.js"));
var fs_1 = __importDefault(require("fs"));
var config_1 = __importDefault(require("./config"));
exports.config = config_1.default;
var dotenv_1 = __importDefault(require("dotenv"));
var chalk_1 = __importDefault(require("chalk"));
dotenv_1.default.load();
var bot = new discord_js_1.default.Client();
exports.bot = bot;
var commands = {
    master: {},
    default: {},
    dm: {},
    moderator: {}
};
exports.commands = commands;
function addCommand(name, type, callback, aliases, description, usage) {
    commands[type][name] = {};
    commands[type][name]['aliases'] = aliases;
    commands[type][name]['description'] = description;
    commands[type][name]['usage'] = usage;
    commands[type][name]['process'] = callback;
}
exports.addCommand = addCommand;
function loadScript(path) {
    require(path);
    console.log(chalk_1.default.green('Script loaded at ' + path));
}
function loadScripts() {
    var commands = fs_1.default.readdirSync('./commands/');
    console.log('commands are', commands);
    commands.map(function (script) {
        var scriptExt = script.substring(script.length - 3, script.length);
        var scriptName = script.substring(0, script.length - 3);
        if (scriptExt === '.js') {
            loadScript('./commands/' + scriptName);
        }
    });
}
loadScripts();
bot.on('ready', function () {
    console.log('Subiex is online');
    bot.user.setActivity('!help to begin', {
        type: 'STREAMING',
        url: 'https://www.twitch.tv/klendi'
    });
});
bot.login(process.env.BOT_TOKEN);
