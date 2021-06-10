const ms = require("ms");
const moment = require('moment');

exports.run = async (Discord, client, message, args) => {
    var e5 = new Discord.RichEmbed()
    .setTitle(":grey_exclamation: Bot Developers Only")
    .setColor("PURPLE")
    .setDescription("For security reasons only EasyRanking bot developers can use that command.")
    if(message.author.id != ('505588569377734656') && message.author.id != ('277994438389792769')) return message.channel.send(e5)

    var userid90 = args[0];
    var reasons = args.splice(1).join(" ");

    var e = new Discord.RichEmbed()
  .setTitle(":white_check_mark: Blacklist was Successful!")
    .setColor("GREEN")
    .setDescription("I have successfully blacklisted the user ID: " + userid90 + ". From all aspects of  EasyRanking.")
    
      var e3 = new Discord.RichEmbed()
    .setTitle(":warning: Woah! Please Slow Down.")
    .setColor("ORANGE")
    .setDescription("Not so fast! It appears you have already have either transferred or untransferred premium recently. Please wait ``2 hours``.")
       var e4 = new Discord.RichEmbed()
    .setTitle(":x: Blacklist Error.")
    .setColor("RED")
    .setDescription("For security reasons you cannot blacklist that user from using EasyRanking.")
    
 //  if(client.cooldowntransfer.has(message.author.id)) {
  //      return message.channel.send(e3)
 //   }
    if(!userid90) return message.channel.send(":x: Please tell me the user ID to blacklist from using this bot.")
      if(userid90 == "505588569377734656") return message.channel.send(e4)
      if(userid90 == "277994438389792769") return message.channel.send(e4)

  //  client.groupid2.set(`${code}`,  groupid2);
 client.blacklist.set(userid90, "Blacklisted by: " + message.author.username)
console.log("I have successfully blacklisted the user ID: " + userid90 + ". From all aspects of EasyRanking.")

    return message.channel.send(e)
}