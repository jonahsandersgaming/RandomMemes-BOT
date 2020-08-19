const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch');
module.exports = class MemesCommand extends BaseCommand {
  constructor() {
    super('memes', 'RandomMemes', []);
  }

  run(client, message, args) {
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(json =>{
      const exampleEmbed = new Discord.MessageEmbed()
      .setTitle(json.title)
      .setImage(json.url)
      .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
      message.channel.send(exampleEmbed);
    });
}}
