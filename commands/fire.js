exports.run = async (Discord, client, message, [Username, ...Rank], args) => {
    const msg = message;
    var Moderator = msg.author;
    var logs = client.logs.get(message.guild.id)
    var group = Number(client.group.get(message.guild.id))
    var rbx = require('noblox.js');
    var cookie = client.cookie.get(message.guild.id)
    Rank = Rank.join(' '); 
          var e2 = new Discord.RichEmbed()
    .setTitle(":x: Premium Required")
    .setColor("RED")
    .setDescription("You will need premium in order to be able to use this command.")
 if(!client.premiumusers.has(message.guild.ownerID)) {
        return message.channel.send(e2);
 };
  let rankingRole = message.member.roles.some.find(role => role.name == "Ranking Permissions");
    if(message.member.roles.has(rankingRole.id)) {
        rbx.setCookie(cookie);

        if (Username) {
            const userid = await rbx.getIdFromUsername(Username);
              if (Rank) {
                  rbx.getIdFromUsername(Username.toLowerCase()).then(id => {
                      if (userid) {
                          rbx.getRankNameInGroup(group, id).then(rankBefore1 => {
                            const rankBefore = rankBefore1;
                          });
                          rbx.setRank({ group: group, target: id, roleset: 1 }).then(() => {
                              rbx.follow({userId: id}).catch(e=> {msg.reply(e)}); 
                              rbx.message({ recipient: id, subject: 'Ranking', body: 'You have been ranked in ' + group.name + ' by ' + msg.member.displayName + ' to ' + Rank + '.\nIf you believe this is an error, feel free to contact an SHR about this.' }).then(() => {
                              rbx.getRankNameInGroup(group, id).then(rankBefore1 => {
                                  var rankBefore = rankBefore1;
                              });
                              var embed = new Discord.RichEmbed()
                              .setDescription('User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked To: `' + Rank + '`\nAccount ranked with: `Grummyv2' + '`')
                              .setTitle(Moderator.tag)
                              msg.channel.send({ embed });
                              }).catch(e => {
                                  var embed = new Discord.RichEmbed()
                                  .setColor('RANDOM')
              .setDescription(`Successfully fired ${Username}`)
              .setTimestamp()
              .setFooter(`Roblox ID: ${userid}`)
              .setTitle(Moderator.tag)
              msg.channel.send({ embed });
                              });
                          }).catch(e => {
                              message.channel.send(`Please make sure the user is able to change the mentioned users rank, that the user is in the group, or the rank is spelled exactly!`)
                          });
                      } else {
                          var embed = new Discord.RichEmbed()
              .setDescription('Invalid Arguments Provided.\n\nUsage: `fire <ROBLOX user/id> <reason>`')
              .setTitle('Moderator')
              .setColor("RED")
              msg.channel.send({ embed });
                      };
                  }).catch(e => message.channel.send(`Error grabbing user id ${e}`));
              } else {
                  var embed = new Discord.RichEmbed()
                  .setDescription('Invalid Arguments Provided.\n\nUsage: `fire <ROBLOX user/id> <reason>`')
                  .setTitle(Moderator.tag)
                  .setColor("RED")
                  msg.channel.send({ embed });
                  return;
              }
          } else {
              var embed = new Discord.RichEmbed()
              .setDescription('Invalid Arguments Provided.\n\nUsage: `fire <ROBLOX user/id> <reason>`')
              .setTitle(Moderator.tag)
              .setColor("RED")
              msg.channel.send({ embed });
              return;
          };
          var Mod1 = message.author;
              var embed = new Discord.RichEmbed()
                  .setAuthor(Mod1.tag)
                  .setColor('RANDOM')
                  .setDescription('User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked To:`' + 'Hotel Guest' + '`\nReason:`' + Rank + '`')
              client.channels.get(logs).send(embed)
      
          
      } else {
        return message.channel.send("You do not have permission to use this command. Only people with the role, `Ranking Permissions` can use this role.")
      }
}