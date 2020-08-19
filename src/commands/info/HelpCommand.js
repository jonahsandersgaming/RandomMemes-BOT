const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'info', []);
  }

  run(client, message, args) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor("#FF4500")
    .addField("Commands",`You can view commands at [Link](https://guide.dev-bot.xyz/commands)`, false);
      message.channel.send(helpEmbed);
  }
}