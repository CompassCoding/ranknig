exports.run = async (Discord, client, message, args) => {
    const enmap = client.warnings
    let user = message.mentions.users.first()
    if(!user) {
        return message.channel.send("Please mention a user to get the warning ammount.")
    }
    var e = new Discord.RichEmbed()
    .setTitle("Warnings")
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .addField("Warnings", `${enmap.get(user.id)}`)
    .setColor("RED")

    message.channel.send(e)
}