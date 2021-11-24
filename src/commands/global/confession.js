const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('confesion')
		.setDescription('Confiesa algo anonimamente :3')
        .addStringOption(option => option.setName('confesion')
            .setDescription('Escribe que quieres confesar')
            .setRequired(true)),
	async execute(interaction) {
		await interaction.reply({content: 'OMG, que fuerte, se lo contare a todos', ephemeral: true});
		await interaction.client.channels.cache.get('912891119052922931')
		.send({
			"embeds": [
			  {
				title: "Un imbecil a confesado!",
				description: interaction.options._hoistedOptions[0].value,
				color: 16777215,
				author: { name: "MankoBot" }
			  }
			]
		  });
        // reply to confessions channel
	},
};

