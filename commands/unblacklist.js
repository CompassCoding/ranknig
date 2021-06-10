const ms = require("ms");
const moment = require('moment');

exports.run = async (Discord, client, message, args) => {
   var e5 = new Discord.RichEmbed()
    .setTitle(":grey_exclamation: Bot Developers Only")
    .setColor("PURPLE")
    .setDescription("For security reasons only EasyRanking bot developers can use that command.")
    if(message.author.id != ('505588569377734656') && message.author.id != ('277994438389792769')) return message.channel.send(e5)
      var code = args[1];
    var userid90 = args[0];
    var reasons = args[2];

    var e = new Discord.RichEmbed()
  .setTitle(":white_check_mark: Unblacklist was Successful!")
    .setColor("GREEN")
    .setDescription("I have successfully unblacklisted the user ID: " + userid90 + ". They can now use EasyRanking again.")
    
      var e3 = new Discord.RichEmbed()
    .setTitle(":warning: Woah! Please Slow Down.")
    .setColor("ORANGE")
    .setDescription("Not so fast! It appears you have already have either transferred or untransferred premium recently. Please wait ``2 hours``.")
      
 //  if(client.cooldowntransfer.has(message.author.id)) {
  //      return message.channel.send(e3)
 //   }
    if(!userid90) return message.channel.send(":x: Please tell me the user ID to unblacklist so they can use this bot again.")
  //  client.groupid2.set(`${code}`,  groupid2);
 client.blacklist.delete(userid90)
 client.blacklist.delete(userid90)
 client.userid90reason.delete(userid90)


    return message.channel.send(e)
}