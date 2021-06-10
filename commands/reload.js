exports.run = async (Discord, client, message, args) => {

   var e5 = new Discord.RichEmbed()
    .setTitle(":grey_exclamation: Bot Developers Only")
    .setColor("PURPLE")
    .setDescription("For security reasons only EasyRanking bot developers can use that command.")
    if(message.author.id != ('505588569377734656') && message.author.id != ('277994438389792769')) return message.channel.send(e5)
  
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        return message.channel.send(`Unable to reload: ${args[0]}.js`);
    }
    message.channel.send(`**Successfully reloaded:** ${args[0]}.js`);
}