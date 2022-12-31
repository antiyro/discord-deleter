const Discord = require('discord.js-selfbot-v13');
require('dotenv').config()

// Replace 'TOKEN' with your selfbot's token
const client = new Discord.Client();
const id = process.env.ID
const token = process.env.TOKEN

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    // Check if the message was sent in a direct message conversation
    if (message.channel.type === 'DM') {
        async function get() {
            const test = await message.channel.messages.fetch()
            test.forEach(msg => { 
                if (msg.author.id == id)
                    msg.delete()
            });
        }
        if (message.content == '!delete')
            get()
    }
});

client.login(token);

