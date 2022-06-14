const Discord = require('discord.js');

const { Client } = require('discord.js')

const client = new Discord.Client({
    http: {
// API ETC
    },
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.once('ready', () => 
{
    console.log('ready!');
});

client.login('TOKEN')