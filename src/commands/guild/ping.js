const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
        const {user} = interaction;
		await interaction.reply(` <@${user.id}> haz hecho Pong!`);
	},
};