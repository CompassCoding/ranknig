exports.run = async (Discord, client, message, args) => {
           var e2 = new Discord.RichEmbed()
    .setTitle(":x: Premium Required")
    .setColor("RED")
    .setDescription("You will need premium in order to be able to use this command.")
 if(!client.premiumusers.has(message.author.id)) {
        return message.channel.send(e2);
 };
    message.delete();
    var e = new Discord.RichEmbed()
    .setTitle("Insufficient Permission")
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .addField("Permissions needed", "`MANAGE_MESSAGES`")
    .setColor("RED")

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(e)

    if(!args[0]) return message.channel.send("Please enter an ammount of messages to get rid of.")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(1));
        
    });
}