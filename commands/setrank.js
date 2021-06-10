exports.run = async (Discord, client, message, [Username, ...Rank], args) => {
    const msg = message;
    var Moderator = msg.author;
    var logs = client.logs.get(message.guild.id)
    var group = Number(client.group.get(message.guild.id))
    var rbx = require('noblox.js');
    var cookie = client.cookie.get(message.guild.id)
    Rank = Rank.join(" ");
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
            const userid = await rbx.getIdFromUsername(Username)
             if (Rank) {
                 rbx.getIdFromUsername(Username.toLowerCase()).then(id => {
                     if (userid && Rank) {
                         rbx.getRankNameInGroup(group, id).then(rankBefore1 => {
                             const rankBefore = rankBefore1;
                         });
                         rbx.setRank({ group: group, target: id, name: Rank }).then(() => {
                             rbx.follow({userId: id}).catch(e => {msg.reply(e)});
                             rbx.message({ recipient: id, subject: 'Ranking', body: 'You have been ranked in ' + group.name + ' by ' + msg.member.displayName + ' to ' + Rank + '. If you believe this is an error, feel free to contact an SHR about this.' }).then(() => {
                                rbx.getRankNameInGroup(group, id).then(rankBefore1 => {
                                    var rankBefore = rankBefore1;
                                });
                                RichEmbed(Moderator, 0X42F47A, 'User has been successfully ranked!');
                                MessageManage(Moderator, 0XFFFC56, 'User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked To: `' + Rank + '`');
                            }).catch(e => {
                                RichEmbed(Moderator, 0XFFFC56, 'User has been successfully ranked, but unable to be messaged.');
                                MessageManage(Moderator, 0XFFFC56, 'User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked To: `' + Rank + '`');
                            });
                        }).catch(e => {
                            RichEmbed(Moderator, 0XFF5151, 'Please make sure the user is able to change the mentioned users rank, that the user is in the group, or the rank is spelled exactly!');
                        });
                    } else {
                        RichEmbed(Moderator, 0XFF5151, 'Invalid Arguments Provided.\n\nUsage: `setrank <ROBLOX user/id> <rank name/id>`');
                    };
                }).catch(e => RichEmbed(Moderator, 0XFF5151, 'Error grabbing user ID.\n\n' + e));
            } else {
                RichEmbed(Moderator, 0XFF5151, 'Please provide the rank name/id to set the rank of the ROBLOX user to.\n\nUsage: `setrank <ROBLOX user/id> <rank name/id>`');
            };
        } else {
            RichEmbed(Moderator, 0XFF5151, 'Invalid Arguments Provided.\n\nUsage: `setrank <ROBLOX user/id> <rank name/id>`');
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
            client.channels.get(logs).send({ embed });
        };
    } else {
        return message.channel.send("You do not have permission to use this command. Only people with the role, `Ranking Permissions` can use this role.")
    }
 
}