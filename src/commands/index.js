const { Collection } = require('discord.js');
const fs = require('fs');

const collectionCommands = new Collection();
const guildCommands = [];
const globalCommands = [];

const guildCommandFiles = fs.readdirSync('src/commands/guild').filter((file) => {
    return file.endsWith('.js');
});
const globalCommandFiles = fs.readdirSync('src/commands/global').filter((file) => {
    return file.endsWith('.js');
});
for (const file of guildCommandFiles) {
    const command = require(`./guild/${file}`);
    collectionCommands.set(command.data.name, command);
    guildCommands.push(command.data.toJSON());
}
for (const file of globalCommandFiles) {
    const command = require(`./global/${file}`);
    collectionCommands.set(command.data.name, command);
    globalCommands.push(command.data.toJSON());
}

module.exports = { collectionCommands, guildCommands, globalCommands };