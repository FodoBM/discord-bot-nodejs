require('dotenv').config();

const { Client, Intents } = require('discord.js');
const { collectionCommands } = require('./commands');
const { interactionHandler, messageHandler, guildHandler } = require('./events');
const { token } = require('./config');
const client = new Client({ intents: Object.values(Intents.FLAGS) });

client.commands = collectionCommands;

client.once('ready', () => console.log('Ready!'));

client.on(interactionHandler.event, interactionHandler.fn);
client.on(messageHandler.event, messageHandler.fn);
client.on(guildHandler.event, guildHandler.fn);

client.login(token);