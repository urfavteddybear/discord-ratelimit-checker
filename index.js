const Discord = require('discord.js')
const client = new Discord.Client({intents: new Discord.Intents(32767)})
client.on('debug', data => console.log(data))
client.login('test')