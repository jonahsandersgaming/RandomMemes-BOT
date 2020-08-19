const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const moment = require("moment");
require("moment-duration-format");

module.exports = class InfoCommand extends BaseCommand {
  constructor() {
    super('info', 'info', []);
  }

  run(client, message, args) {
    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    const infoEmbed = new Discord.MessageEmbed()
    .setColor("#9400D3")
    .setAuthor(`RandomMemes`, client.user.displayAvatarURL)
    .addField(`Version`,`0.1`, true)
    .addField(`Library`,`Discord.js` , true)
    .addField(`Creator`,`Prezes#0930`, true)
    .addField(`Servers`, `${client.guilds.cache.size}`, true)
    .addField(`Users`, `${client.users.cache.size}`, true)
    .addField(`Mem Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField(`Invite`, `[Invite Bot](https://discord.com/oauth2/authorize?client_id=745726041041010708&scope=bot&permissions=3080)`, true)
    .addField(`GitHub`, `[Source](https://github.com/Jacob22092/RandomMemes-BOT)`, true)
    .addField(`Vote`, `[Vote]()`, true)
    .setFooter(`Uptime: ${duration}`);
      message.channel.send(infoEmbed);
  }
}
