exports.run = async (Discord, client, message, [Username, ...Reason], args) => {
    const msg = message;
    var Moderator = msg.author;
    var logs = client.logs.get(message.guild.id)
    var group = Number(client.group.get(message.guild.id))
    var rbx = require('noblox.js');
    var cookie = client.cookie.get(message.guild.id)
    Reason = Reason.join(' '); 
         var e2 = new Discord.RichEmbed()
    .setTitle(":x: Premium Required")
    .setColor("RED")
    .setDescription("You will need premium in order to be able to use this command.")
 if(!client.premiumusers.has(message.guild.ownerID)) {
        return message.channel.send(e2);
 };
 let rankingRole = message.guild.roles.find(role => role.name == "Ranking Permissions");
    if(message.member.roles.has(rankingRole.id)) {
        rbx.setCookie(cookie);
    
        if (Username) {
            const userid = await rbx.getIdFromUsername(Username);
              if (Reason) {
                  rbx.getIdFromUsername(Username.toLowerCase()).then(id => {
                      if (userid && Reason) {
                        rbx.getRankInGroup({group: group, userId: id}).then(Rank => {
                        if (Rank != null && Rank + 1 < 255 && Rank != 0) {
                          rbx.promote({group: group, target: id}).then(async () => {
                              const RankAfter = await rbx.getRankInGroup({group: group, userId: id});
                              rbx.follow({userId: id}).catch(e=> {msg.reply(e)}); 
                              rbx.message({ recipient: id, subject: 'Ranking', body: 'You have been promoted in '  + group.name + ' by ' + msg.member.displayName + ' to ' + Rank + '.\nIf you believe this is an error, feel free to contact an SHR about this.' }).then(() => {
                              rbx.getRankNameInGroup(group, id).then(rankBefore1 => {
                                  var rankBefore = rankBefore1;
                              });
                                  RichEmbed(Moderator, 0X42F47A, 'User has been successfully ranked!');
                                  MessageManage(Moderator, 0XFFFC56, 'User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked From: `' + Rank + '`\nRanked To: `' + RankAfter + '`\nReason: `' + Reason + '`');
                              }).catch(e => {
                                  RichEmbed(Moderator, 0XFFFC56, 'User has been successfully ranked, but unable to be messaged.');
                                  MessageManage(Moderator, 0XFFFC56, 'User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked From: `' + Rank + '`\nRanked To: `' + RankAfter + '`\nReason: `' + Reason + '`');
                              });
                          }).catch(e => {
                              RichEmbed(Moderator, 0XFF5151, 'Please make sure the user is able to change the mentioned users rank, that the user is in the group, or the rank is spelled exactly!');
                          });
                        } else {
                        
                        };
                        }).catch(e=> {msg.reply(e)});
                      } else {
                        RichEmbed(Moderator, 0XFF5151, 'Invalid Arguments Provided.\n\nUsage: `promote <ROBLOX user/id> <reason>`');
                      };
                }).catch(e => {msg.reply(e)});
              } else {
                  RichEmbed(Moderator, 0XFF5151, 'Please provide the reason of why you want to promote the ROBLOX user.\n\nUsage: `promote <ROBLOX user/id> <reason>`');
              };
          } else {
              RichEmbed(Moderator, 0XFF5151, 'Invalid Arguments Provided.\n\nUsage: `promote <ROBLOX user/id> <reason>`');
          };
      
          function RichEmbed(Mod1, Color, Description) {
              var embed = new Discord.RichEmbed()
                  .setAuthor(Mod1.tag, Mod1.displayAvatarURL)
                  .setColor(Color)
                  .setDescription(Description);
              msg.channel.send({ embed });
          };
          function MessageManage(Mod1, Color, Description) {
              var embed = new Discord.RichEmbed()
                  .setAuthor(Mod1.tag, Mod1.displayAvatarURL)
                  .setColor(Color)
                  .setDescription(Description);
              client.channels.get(logs).send(embed)
          }; 
    } else {
        return message.channel.send("You do not have permission to use this command. Only people with the role, `Ranking Permissions` can use this role.")
    }
 
}