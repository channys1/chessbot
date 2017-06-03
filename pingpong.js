/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/
console.log('Starting');
// Import the discord.js module
const Discord = require('discord.js');
console.log('discord.js imported');

// Create an instance of a Discord client
const client = new Discord.Client();
console.log('discord client instance created');

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'MzIwMzY5MTg2MDcxMTE3ODI2.DBSsoQ.zk9v_C6U4JZwfc7-O1vMg_eCC1s';
console.log('bot token created');

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

// Log our bot in
client.login(token);
