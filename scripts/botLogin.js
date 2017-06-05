/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/
console.log('starting...');                    // debug message

var fs      = require("fs");                   // importing file handling system module
const token = fs.readFileSync("botToken.txt"); // assigning the bot token
console.log('bot token buffered');             // debug message

const Discord = require('discord.js');         // importing discord.js module
console.log('discord.js imported');

const client = new Discord.Client();           // Create an instance of a Discord client
console.log('discord client instance created');

client.on('ready', () => {                     // discord.js client ready event
    console.log('I am ready!');
  });

client.on('message', message => {              // simple bot ping message test
    // If the message is "ping"
    if (message.content === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong');
    }
  });

client.login(token.toString());                // logging the bot in
