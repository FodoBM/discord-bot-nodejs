const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcome')
		.setDescription('Le dice hola al usuario, pero solo el puede verlo'),
	async execute(interaction) {
		await interaction.reply({ content: 'Que onda puta', ephemeral: true });
	},
};