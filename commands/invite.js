exports.run = async (Discord, client, message, args) => {
    var msg = message;
    var e = new Discord.RichEmbed()
    .setDescription("**EasyRanking** is a free discord bot with extra premium features! It allows you to connnect your discord server with your roblox group which gives access to some awesome commands! \n[Invite Me:](https://discord.com/api/oauth2/authorize?client_id=704555323460943892&permissions=4294967287&scope=bot)\n[Support Server:](https://discord.gg/GtGs9p5nbp)")
    .setFooter("Made by AviaBays#1975")
    .setColor("GREEN")
    .setTimestamp();
    msg.channel.send(e)
    
}
