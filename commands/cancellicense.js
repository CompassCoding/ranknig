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
    .setDescription("I have successfully cancelled the premium license for user ID: " + groupid2)
     
    

 
    if(!groupid2) return message.channel.send(":x: Please tell me what User ID I should cancel their premium license for.")
  //  client.groupid2.set(`${code}`,  groupid2);
 client.premiumusers.delete(groupid2)
      client.groupid5.delete(message.author.id)
        client.transferstatus.delete(message.author.id)
        client.transferstatus.delete(groupid2)

                client.actives.delete(groupid2)


 client.premiumusers.delete(groupid2)
    return message.channel.send(e)
}
                                                