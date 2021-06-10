exports.run = async (Discord, client, message, args) => {
         var e2 = new Discord.RichEmbed()
    .setTitle(":x: Premium Required")
    .setColor("RED")
    .setDescription("You will need premium in order to be able to use this command.")
 if(!client.premiumusers.has(message.author.id)) {
        return message.channel.send(e2);
 };
    var e = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Wrong format!")
    .setDescription("```{grouprank} - Roblox user group role. \n{grouprankid} - Roblox user group rankid \n{robloxname} - Username of the ROBLOX user. \n{robloxid} - Userid of the ROBLOX user. \n{discordname} - Discord Username of the user.``` \n\n**NOTE:** The `{}` must be included in the command!")
    var template = args[0];
    if (message.member.hasPermission('MANAGE_SERVER')) {
        if(!template) return message.channel.send(e)
    } else {
        return message.channel.send("You don't meet the permissions required for this command: `You need the permission MANAGE_SERVER`")
    }
}