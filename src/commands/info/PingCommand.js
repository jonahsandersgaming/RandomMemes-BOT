const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'info', []);
  }

  run(client, message, args) {
    message.channel.send("Bot Ping = " + `\`${client.ws.ping} ms\``).catch(console.error);
  }
}