const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cowsay')
    .setDescription('Makes a cow say something!')
    .addStringOption((option) => option.setName('input')
      .setDescription('What the cow says')
      .setMaxLength(50))
    .addStringOption((option) => option.setName('cow')
      .setDescription('Choose your cow')
      .setMaxLength(25)
      .addChoices(
        { name: 'classic cowsay', value: 'default' },
        { name: 'king', value: 'king' },
        { name: 'spidercow', value: 'spidercow' },
        { name: 'jellyfish', value: 'jellyfish' },
        { name: 'sheep', value: 'sheep' },
        { name: 'cowfee', value: 'cowfee' },
        { name: 'ghost', value: 'ghost' },
        { name: 'skeleton', value: 'skeleton' },
        { name: 'wizard', value: 'wizard' },
        { name: 'whale', value: 'whale' },
        { name: 'sudowoodo', value: 'sudowoodo' },
        { name: 'shrug', value: 'shrug' },
        { name: 'goat', value: 'goat' },
        { name: 'banana', value: 'banana' },
        { name: 'dalek', value: 'dalek' },
        { name: 'homer', value: 'homer' },
        { name: 'ackbar', value: 'ackbar' },
      )),
  async execute(interaction) {
    const userInput = interaction.options.getString('input');
    const cowChoice = interaction.options.getString('cow');
    const moo = cowsay.say({ text: userInput, f: cowChoice }).replaceAll('`', '\'');
    const reply = `\`\`\`${moo}\`\`\``;
    const mooCount = reply.length;
    if (mooCount < 2000) {
      await interaction.reply(reply);
    } else {
      await interaction.reply('Error: Your cowsay is over the character limit!');
    }
  },
};
