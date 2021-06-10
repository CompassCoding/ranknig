exports.run = async (Discord, client, message, args) => {
           var e2 = new Discord.RichEmbed()
    .setTitle(":x: Premium Required")
    .setColor("RED")
    .setDescription("You will need premium in order to be able to use this command.")
 if(!client.premiumusers.has(message.author.id)) {
        return message.channel.send(e2);
 };
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("This requires you to have an `Administraton` role in this server. If you believe this is a problem, contact a server administrator or contact our Support Team!")

    const enmap = client.prefix;
    var prefix = args[0];

    if(!prefix) {
        return message.channel.send("Please say a prefix to change the server prefix to.")
    }

    enmap.set(message.guild.id, prefix)
    message.channel.send(":white_check_mark: Successfully changed the server prefix to `" + prefix + "`!")
}
// Copyright AviaBays 2020