const Discord = require('discord.js');
const rbx = require('noblox.js');

exports.run = async(client, message, args) => {
 //   if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("<a:cross:655002547601276938> You do not have the correct permission `MANAGE_GUILD`! You need that permission to use this command.")
    const User = message.mentions.users.first();
    const User1 = message.guild.member(message.mentions.users.first());
    if(!User) return message.channel.send("<a:cross:655002547601276938> You need to mention a user!")

    const foundId = client.db.get(User.id).id
    const username = client.db.get(User.id).username
    rbx.getRankInGroup(client.group.get(message.guild.id), foundId).then(foundRank => {
        rbx.getRankNameInGroup(client.group.get(message.guild.id), foundId).then(rankName => {

            let rankName2 = message.guild.roles.find(r => r.name === rankName)
            if(!rankName2) return message.channel.send("The role `" + rankName + "` is not on this server!")

            const embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${foundId}&width=420&height=420&format=png`)
            .setTitle("Get Roles")
            .setDescription("Updated roles for `" + client.db.get(User.id).username + "`")
            .addField("Username", username)
            .addField("User ID", foundId)
            .addField("Group Rank", rankName)
            .setFooter("Roles updated")
            .setTimestamp()
            message.channel.send(embed)

            User1.addRole(rankName2.id)
        })
    })
};