const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('secretping')
    .setDescription('Replies with Pong! Only visible to the user.'),
  async execute(interaction) {
    await interaction.reply({ content: 'Pong!', ephemeral: true });
  },
};
