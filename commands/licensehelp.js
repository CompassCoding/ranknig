exports.run = async (Discord, client, message, args) => {
    const prefix = client.prefix.get(message.guild.id) || "!";
    var msg = message;
    var e = new Discord.RichEmbed()
    .setAuthor("❓ Staff Commands")
    .setColor("YELLOW")
    .setDescription( "`" + prefix + "transfer` - Transfer's a users premium via their Discord ID. \n" + "`"  + prefix + "untransfer` - Untransfer's a users premium via their Discord ID.\n" + "`" + prefix + "redeem` - Redeems a premium code to activate a premium license.\n" + "`"+ prefix + "cancellicense` - Cancels the mentions user's license.\n"+ "`" + prefix + "status` - View your current premium status.\n" +  "`"+  prefix + "insertcode` - Inserts a new premium code and makes it redeemable.")
    msg.channel.send(e)
    // msg.reply("Please check your DMs!")
}
