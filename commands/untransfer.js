const ms = require("ms");
const moment = require('moment');

exports.run = async (Discord, client, message, args) => {
  //  if(message.author.id !== '481941149620371462') return message.channel.send("You don't meet the permissions required for this command: `This command is reserved for the bot developers.`")
    var code = args[1];
    var groupid5 = args[0];
    var e5 = new Discord.RichEmbed()


       .setTitle(":question: Tell me who has your license.")
    .setColor("RED")
    .setDescription("Please tell mention the user to untransfer your license to.")
   let user = message.mentions.users.first()
   if(!user) return message.channel.send(e5)
    
     
     //we check, whether the bot is mentioned, client.user returns the user that the client is logged in as

    var e = new Discord.RichEmbed()
  .setTitle(":white_check_mark: Untransfer was Successful!")
    .setColor("GREEN")
    .setDescription("I have successfully untransferred your premium license from: " + message.mentions.users.first().tag)
     var e2 = new Discord.RichEmbed()
    .setTitle(":x: Premium Required")
    .setColor("RED")
    .setDescription("You will need premium in order to be able to use this command.")
          var e7 = new Discord.RichEmbed()
    .setTitle(":x: Premium Required")
    .setColor("RED")
    .setDescription(message.mentions.users.first().tag +" will need premium in order for you to be able to untransfer.")
      var e3 = new Discord.RichEmbed()
    .setTitle(":warning: Woah! Please Slow Down.")
    .setColor("ORANGE")
    .setDescription("Not so fast! It appears you have already have either transferred or untransferred premium recently. Please wait ``2 hours``.")
      
 if(!client.premiumusers.has(message.author.id)) {
        return message.channel.send(e2)
    }
   if(!client.premiumusers.has(message.mentions.users.first().id)) {
        return message.channel.send(e7)
    }
  // if(client.cooldowntransfer.has(message.author.id)) {
  //      return message.channel.send(e3)
//  }
    if(!groupid5) return message.channel.send(":x: Please tell mention the user to untransfer your license to.")
  //  client.groupid2.set(`${code}`,  groupid2);
 client.premiumusers.delete(message.mentions.users.first().id)
 //  client.cooldowntransfer.set(message.author.id, "true")
 client.premiumusers.delete(message.mentions.users.first().id)
   client.transferstatus.delete(message.mentions.users.first().id)
   client.transferstatus.delete(message.author.id)

      client.redcodes.set(message.author.id,   client.redcodes.get
                          (message.mentions.users.first().id) )

      client.premiumusers.set(message.author.id, "Active")
      client.premiumuserstext.set(message.author.id, "Active")
     message.channel.send(":cry:"+ ' ' + groupid5  + " Welp! You have had your EasyRanking premium `untransferred` by: " + message.author.username +".") 

    return message.channel.send(e)

}
// Copyright AviaBays 2020