

const moment = require('moment');
exports.run = async (Discord, client, message, args) => {
    const enmap3 = client.redcodes;
    const enmap = client.premiumusers;
 
    const m = moment().add('day', client.redcodes.get(message.author.id)).toString()
    var nopr = new Discord.RichEmbed()
    .setAuthor(message.author.id, message.author.displayAvatarURL)
    .setColor("#ffd400")
    .setDescription("This user does not have premium. They may donate by saying !donate")
    var haspr = new Discord.RichEmbed()
    .setColor("#ffd400")
    .setAuthor(message.author.tag + "'s Premium Status")
    .addField("Premium Status", client.premiumuserstext.get(message.author.id))

    .addField("Expiry", m)


    if(enmap.has(message.author.id)) {
        return message.channel.send(haspr)
    }
    if(!enmap.has(message.author.id)) {
        return message.channel.send(nopr)
    }
}
// Copyright AviaBays 2020