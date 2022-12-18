const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cowsay')
    .setDescription('Makes a cow say something!')
    .addStringOption((option) => option.setName('input')
      .setDescription('The input to echo back')
      .setMaxLength(25))
    .addStringOption((option) => option.setName('cow')
      .setDescription('Choose your cow')
      .setMaxLength(25)),
  async execute(interaction) {
    const userInput = interaction.options.getString('input');
    const cowChoice = interaction.options.getString('cow');
    const moo = cowsay.say({ text: userInput, f: cowChoice }).replaceAll('`', '\'');
    await interaction.reply(`\`\`\`${moo}\`\`\``);
  },
};
