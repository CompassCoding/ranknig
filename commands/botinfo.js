exports.run = async (Discord, client, message, args) => {
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    var e = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("GREEN")
    .addField("Bot Name", client.user.username, true)
    .addField("Channels", client.channels.size, true)
    .addField("Servers", client.guilds.size, true)
    .addField("Users", client.users.size, true)
    .addField("Ping", client.ping, true)
    .addField("Uptime", uptime, true)
    .addField("Been alive since", client.user.createdAt)
    .addField("discord.js version: *11.6.4*")
    .addField("Node Version: *V10/V12")
    message.channel.send(e)
    return;
}