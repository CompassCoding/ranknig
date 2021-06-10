const ms = require('ms');

exports.run = async (Discord, client, message, args) => {
    const enmap = client.warnings
    var e = new Discord.RichEmbed()
    .setTitle("Insufficient Permission")
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .addField("Permissions needed", "`MANAGE_MESSAGES`")
    .setColor("RED")
    var e2 = new Discord.RichEmbed()
    .setTitle("Error")
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription("Can not warn user!")
    .setColor("RED")
    var e3 = new Discord.RichEmbed()
    .setTitle("Error")
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription("Could not find user.")
    .setColor("RED")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(e)
    let user = message.mentions.users.first()
    if(!user) return message.channel.send(e3)

    let reason = args.join(" ").slice(22);
    if(!reason) return message.channel.send("Please put a reason to warn the user.")

    if(!client.warnings.get(user.id)) client.warnings.set(user.id, 0)

    let warnings = client.warnings.get(user.id)
    const num = parseInt(warnings) + 1

    enmap.set(user.id, num)
    message.channel.send(":white_check_mark: Successfully warned " + user.id + " for " + reason + "!")
    user.send("You have been warned in " + message.guild.name + " by " + message.author.tag + " for `" + reason + "`.")
}