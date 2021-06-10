exports.run = async (Discord, client, message, args) => {
    const prefix = client.prefix.get(message.guild.id)
    var e = new Discord.RichEmbed()
    .setTitle("Insufficient Permission")
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .addField("Permissions needed", "`BAN_MEMBERS`")
    .setColor("RED")
    var e2 = new Discord.RichEmbed()
    .setTitle("Error")
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .setDescription("Could not find user.")
    .setColor("RED")
    var e3 = new Discord.RichEmbed()
    .setTitle("Error")
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .setDescription("Please supply a reason.")
    .setColor("RED")

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(e)

    if(args[0] == "help") {
        message.reply("Usage: " + prefix + "ban [@USER] [REASON]")
        return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) {
        return message.channel.send(e2)
    }
    let reason = args[1];
    if(!reason) {
        return message.channel.send(e3)
    }
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("The user has the same permissions as you making it unable to ban them!")

    message.guild.member(bUser).ban(reason)
    var be = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("RED")
    .addField("Banned User", `${bUser}`)
    .addField("Reason", `${reason}`)
    message.channel.send(be)
}