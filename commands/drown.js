const moment = require('moment');
exports.run = async (Discord, client, message, args) => {
       var e5 = new Discord.MessageEmbed()


       .setTitle(":warning: Mention User")
    .setColor("ORANGE")
    .setDescription("Please mention the user to drown in the ocean.")
   let user = message.mentions.users.first()
   if(!user) return message.channel.send(e5)
    
     
        var e2 = new Discord.MessageEmbed()
    .setTitle(":x: Premium Required")
    .setColor("RED")
    .setDescription("You will need premium in order to be able to use this command.")
 if(!client.premiumusers.has(message.author.id)) {
        return message.channel.send(e2);
 };
        var e3 = new Discord.MessageEmbed()
    .setTitle(":warning: Your so close!")
    .setColor("ORANGE")
    .setDescription("Our system says you do have a premium license but you have transferred it to: " + client.premiumuserstext.get(message.author.id) + ". As such you cannot run this Premium command unless you untransfer by saying: `!untransfer`")
 if(client.transferstatus.has(message.author.id)) {
        return message.channel.send(e3);
 };
  if(message.mentions.members.size == 1) {
        let member = message.mentions.members.first()
        message.channel.send(`${message.author} drowned ${member}! Yay!`, {
            file: "https://media.giphy.com/media/CZpro4AZHs436/giphy.gif"
        });
    }
}
// Copyright AviaBays 2020