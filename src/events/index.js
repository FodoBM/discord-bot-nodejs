const interactionHandler = {
    event: 'interactionCreate',
    fn: async( interaction ) => {
        console.log('*** InteractionCreate event triggered ***');
        //console.log('Interaction recived: \t', interaction);
        if (!interaction.isCommand()) return;
        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) return;
        try { await command.execute(interaction) } 
        catch (error) {
            console.error(error);
            return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }   
};

const messageHandler = {
    event: 'messageCreate',
    fn: async ( message ) => {
        console.log('*** MessageCreate event triggered ***');
        //console.log('Message recieved: \t', message);
        if(!message.author.bot) message.reply('Hola usuario')
            .then(() => console.log('Respuesta enviada'))
            .catch((err) => console.log(err));
        // message.reply('This is a reply!')
        //   .then(() => console.log('Replied to message "${message.content}"'))
        //   .catch(console.error);
    }
};

const guildHandler = {
    event: 'guildMemberAdd',
    fn: async ( member ) => {
        console.log('*** GuildMemberAdd event triggered ***');
        console.log('Member recieved: \t', member);
        // console.log(' Saludando a la puta')
        // const options = {};
        // await member.send(options);
        // console.log('Asignando rol de miembre a la puta');
        // const data = {};
        // await member.edit(data);
    }
};

module.exports = {
    interactionHandler,
    messageHandler,
    guildHandler
}