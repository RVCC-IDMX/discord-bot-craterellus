const {
  SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('guide')
    .setDescription('Replies with a message & a button.'),
  async execute(interaction) {
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('primary')
          .setLabel('Click me!')
          .setStyle(ButtonStyle.Primary),
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel('Repo')
          .setStyle(ButtonStyle.Link)
          .setURL('https://github.com/RVCC-IDMX/discord-bot-craterellus'),
      );
    await interaction.reply({ content: 'I think you should,', components: [row] });
  },
};
