require('dotenv').config();

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('.');
const { guildCommands, globalCommands } = require('../commands');

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: guildCommands })
	.then(() => console.log('Successfully registered guild commands.'))
	.catch(console.error);
rest.put(Routes.applicationCommands(clientId), { body: globalCommands })
	.then(() => console.log('Successfully registered global commands.'))
	.catch(console.error);