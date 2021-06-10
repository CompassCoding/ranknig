const ms = require("ms");
const moment = require('moment');

exports.run = async (Discord, client, message, args) => {
  //  if(message.author.id !== '481941149620371462') return message.channel.send("You don't meet the permissions required for this command: `This command is reserved for the bot developers.`")
    var code = args[1];
    var groupid5 = args[0];
    var e5 = new Discord.MessageEmbed()


       .setTitle(":question: Who should I transfer to?")
    .setColor("RED")
    .setDescription("Please tell mention the user to transfer your license to.")
   let user = message.mentions.users.first()
   if(!user) return message.channel.send(e5)
    
     
     //we check, whether the bot is mentioned, client.user returns the user that the client is logged in as

    var e = new Discord.MessageEmbed()
  .setTitle(":white_check_mark: Transfer was Successful!")
    .setColor("GREEN")
    .setDescription("I have successfully transferred your premium license to: " + message.mentions.users.first().tag)
     var e2 = new Discord.MessageEmbed()
    .setTitle(":x: Premium Required")
    .setColor("RED")
    .setDescription("You will need premium in order to be able to use this command.")
          var e7 = new Discord.MessageEmbed()
    .setTitle(":x: So Close!")
    .setColor("RED")
    .setDescription("It appears " + message.mentions.users.first().tag +" already has a premium license. No need to transfer it to them!")
         
      var e3 = new Discord.MessageEmbed()
    .setTitle(":warning: Woah! Please Slow Down.")
    .setColor("ORANGE")
    .setDescription("Not so fast! It appears you have already have either transferred or untransferred premium recently. Please wait ``2 hours``.")
        var e8 = new Discord.MessageEmbed()
    .setTitle(":warning: Cannot Transfer!")
    .setColor("ORANGE")
    .setDescription("You can only transfer your premium license to 1 user at a time. Your premium license was already transferred to: " + client.premiumuserstext.get(message.author.id) + ". As such you cannot transfer again unless you untransfer by saying: `!untransfer`")
 if(client.transferstatus.has(message.author.id)) {
        return message.channel.send(e8);
 };
 if(!client.premiumusers.has(message.author.id)) {
        return message.channel.send(e2)
    }
   if(client.premiumusers.has(message.mentions.users.first().id)) {
        return message.channel.send(e7)
    }
  // if(client.cooldowntransfer.has(message.author.id)) {
  //      return message.channel.send(e3)
//  }
    if(!groupid5) return message.channel.send(":x: Please tell mention the user to transfer your license to.")
  //  client.groupid2.set(`${code}`,  groupid2);
 client.premiumusers.set(message.mentions.users.first().id, "Premium transferred by: " + message.author.username)
 //  client.cooldowntransfer.set(message.author.id, "true")
 client.premiumuserstext.set(message.mentions.users.first().id, "Premium transferred by: " + message.author.username)
 //  client.transferstatus.delete(groupid5)
   client.transferstatus.set(message.author.id, "true")

      client.redcodes.set(message.mentions.users.first().id,   client.redcodes.get
                          (message.author.id) )

      client.premiumusers.set(message.author.id, message.mentions.users.first().id)
      client.premiumuserstext.set(message.author.id, message.mentions.users.first().tag)
     message.channel.send(":tada:"+ ' ' + groupid5  + " Congrats! You have been `transferred` EasyRanking premium by: " + message.author.username +".") 

    return message.channel.send(e)

}
// Copyright AviaBays 2020