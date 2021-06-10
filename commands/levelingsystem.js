exports.run = async (Discord, client, message, args) => {
           var e2 = new Discord.RichEmbed()
    .setTitle(":x: Premium Required")
    .setColor("RED")
    .setDescription("You will need premium in order to be able to use this command.")
 if(!client.premiumusers.has(message.author.id)) {
        return message.channel.send(e2);
 };
    const enmap = client.levelsystem;
    if (message.member.hasPermission('MANAGE_SERVER')) {
    if (args[0] === 'Enable' || args[0] === 'enable') {
        enmap.set(message.guild.id, true)
        message.channel.send("I have enabled the leveling system for your server!")
    }
    if (args[0] === 'Disable' || args[0] === 'disable') {
        enmap.delete(message.guild.id)
        message.channel.send("I have disabled the leveling system for your server!")
    }

    } else {
        return message.channel.send("You do not have permission to use this command! Only server owners do.")
    }
}