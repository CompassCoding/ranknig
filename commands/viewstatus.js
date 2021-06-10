const moment = require('moment');
exports.run = async (Discord, client, message, args) => {
     var e5 = new Discord.RichEmbed()
    .setTitle(":grey_exclamation: Bot Developers Only")
    .setColor("PURPLE")
    .setDescription("For security reasons only EasyRanking bot developers can use that command.")
    if(message.author.id != ('277994438389792769') && message.author.id != ('505588569377734656') && message.author.id != ('505588569377734656')) return message.channel.send(e5)
  
    const enmap3 = client.redcodes;
    const enmap = client.premiumusers;
    let user = message.mentions.users.first()
    if(!user) {
        return message.channel.send("Please mention a user to get premium status for!")
    }
    const m = moment().add('day', client.redcodes.get(user.id)).toString()
    var nopr = new Discord.MessageEmbed()
    .setAuthor(user.tag, user.displayAvatarURL())
    .setColor("#ffd400")
    .setDescription("This user does not have premium. They may donate by saying !donate")
    var haspr = new Discord.MessageEmbed()
    .setColor("#ffd400")
    .setAuthor(user.tag + "'s Premium Status")
    .addField("Premium Status", client.premiumuserstext.get(user.id))

    .addField("Expiry", m)


    if(enmap.has(user.id)) {
        return message.channel.send(haspr)
    }
    if(!enmap.has(user.id)) {
        return message.channel.send(nopr)
    }
}