exports.run = async (Discord, client, message, args) => {
   var e5 = new Discord.RichEmbed()
    .setTitle(":grey_exclamation: Bot Developers Only")
    .setColor("PURPLE")
    .setDescription("For security reasons only EasyRanking bot developers can use that command.")
    if(message.author.id != ('277994438389792769') && message.author.id != ('505588569377734656')) return message.channel.send(e5)
      var embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(0X2355CF)
    .setDescription('Bot is Restarting...');
    await message.channel.send({ embed })
    process.exit(1);
  }
// Copyright AviaBays 2020