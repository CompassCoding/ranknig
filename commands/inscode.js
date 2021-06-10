const ms = require("ms");
const moment = require('moment');

exports.run = async (Discord, client, message, args) => {
   var e5 = new Discord.RichEmbed()
    .setTitle(":grey_exclamation: Bot Developers Only")
    .setColor("PURPLE")
    .setDescription("For security reasons only EasyRanking bot developers can use that command.")
    if(message.author.id != ('505588569377734656') && message.author.id != ('277994438389792769')) return message.channel.send(e5)
      var code = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    var dayss = args[0];

    var e = new Discord.RichEmbed()
    .setAuthor(client.user.username)
    .setTitle(":white_check_mark: Success")
    .setColor("#7289DA")
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription("I have generated a code `" + code + "` which will last for `" + dayss + "` days!")
    .setTimestamp()
    .setFooter("Made by Caleb.#0001")

    if(!dayss) return message.channel.send("Please supply an amount of days for the code to last!")
    client.code.set(`${code}`,  dayss);
    return message.channel.send(e)
}