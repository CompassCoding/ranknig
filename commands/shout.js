// Copyright AviaBays 2020
exports.run = async (Discord, client, message, [...ShoutMessage], args) => {
    const msg = message;
    var Moderator = msg.author;
    var logs = client.logs.get(message.guild.id)
    if(!logs ) return message.channel.send("You never set a log channel!")
    var group = Number(client.group.get(message.guild.id))
    var rbx = require('noblox.js');
    var cookie = client.cookie.get(message.guild.id)
    ShoutMessage = ShoutMessage.join(" ");

     let rankingRole = message.guild.roles.find(role => role.name == "Ranking Permissions");
    if(message.member.roles.has(rankingRole.id)) {
        rbx.setCookie(cookie)
        if (ShoutMessage) {
            rbx.shout({group: group, message: ShoutMessage}).then(promise => { 
            RichEmbed(Moderator, 0X42F47A, 'Sucessfully shouted to the Group!\n\nMessage: `' + ShoutMessage + '`');
            }).catch(e => {
              RichEmbed(Moderator, 0XFF5151, 'There was an error in shouting the message.');
            });
          } else {
            RichEmbed(Moderator, 0XFF5151, 'Please provide a shout message.\n\nUsage: `shout <message>`');
          };
        
      
      
      function RichEmbed(Mod1, Color, Description) {
          var embed = new Discord.RichEmbed()
              .setAuthor(Mod1.tag, Mod1.displayAvatarURL)
              .setColor(Color)
              .setDescription(Description);
          msg.channel.send({ embed });
      
      var embed2 = new Discord.RichEmbed()
      .setAuthor(Mod1.tag, Mod1.displayAvatarURL)
      .setColor("GREEN")
      .setTitle("New Shout!")
      .setDescription(Description)
      .setFooter("Shout done by " + message.author.username)
      client.channels.get(logs).send(embed2)
      }



    } else {
        return message.channel.send("You do not have permission to use this command. Only people with the role, `Ranking Permissions` can use this role.")
    }
}