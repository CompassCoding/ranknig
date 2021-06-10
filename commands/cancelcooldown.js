const ms = require("ms");
const moment = require('moment');

exports.run = async (Discord, client, message, args) => {
    var e5 = new Discord.MessageEmbed()
    .setTitle(":grey_exclamation: Bot Developers Only")
    .setColor("PURPLE")
    .setDescription("For security reasons only EasyRanking bot developers can use that command.")
    if(message.author.id != ('505588569377734656') && message.author.id != ('277994438389792769')) return message.channel.send(e5)
  
  var code = args[1];
    var groupid2 = args[0];

    var e = new Discord.MessageEmbed()
    .setTitle(":white_check_mark: Command was Successful!")
    .setColor("GREEN")
    .setDescription("I have successfully cancelled the cooldown time for user ID: " + groupid2)
     var e2 = new Discord.MessageEmbed()
    .setTitle(":x: Premium Required")
    .setColor("RED")
    .setDescription("You will need premium in order to be able to use this command.")
      var e3 = new Discord.MessageEmbed()
    .setTitle(":warning: Woah! Please Slow Down.")
    .setColor("ORANGE")
    .setDescription("Not so fast! It appears you have already have either transferred or untransferred premium recently. Please wait ``2 weeks``.")
 if(!client.premiumusers.has(message.author.id)) {
        return message.channel.send(e2)
    }
   if(!client.cooldowntransfer.has(message.author.id)) {
        return message.channel.send(e3)
    }
    if(!groupid2) return message.channel.send(":x: Please tell me what User ID I should cancel the transfer cooldown for.")
  //  client.groupid2.set(`${code}`,  groupid2);

      client.cooldowntransfer.delete(groupid2)

    return message.channel.send(e)
}