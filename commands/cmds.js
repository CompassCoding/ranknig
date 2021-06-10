exports.run = async (Discord, client, message, args) => {
    const prefix = client.prefix.get(message.guild.id) || "!";
    var msg = message;
    var e = new Discord.RichEmbed()
    .setAuthor("Commands")
    .setColor("RANDOM")
    .addField(":information_source: Information", "`" + prefix + "help` - Displays all commands. \n`" + prefix + "cmds` - Displays all commands. \n`" + prefix + "invite` - Gives information about this bot.")
    .addField("🎮 Roblox", "`" + prefix + "promote [USER] [REASON]` - Sets the specified ROBLOX user rank to the next one. \n`" + prefix + "demote [USER] [REASON]` - Sets the specified ROBLOX user to a 1 rank lower. \n `" + prefix + "fire [USER] [REASON]` - Sets the specified ROBLOX user rank to the lowest.\n`" + prefix + "setrank [USER] [RANK]` - Sets the specified ROBLOX user rank to the specified \n`" + prefix + "exile [USER] [REASON]` - Kicks the specified ROBLOX user out of the group.")
    .addField(":wastebasket: Misc", "`" + prefix + "redeem [CODE]` - Redeem the code you purchased. \n\n`" + prefix + "status [@USER]` - Checks premium status of mentioned user.\n`" + prefix + "meme` - Shows you a meme. \n`" + prefix + "level` - Shows you your level. \n`" + prefix + "suggest [SUGGESTION]` - Sends a bot suggestion to the support server for the owner to look at. \n`" + prefix + "verify [USERNAME]` - Links your roblox account to your discord account.")
    .addField(":gear: Configuration", "`" + prefix + "setprefix [PREFIX]` - Sets the server prefix. \n`" + prefix + "levelingsystem [ENABLE/DISABLE]` - Enabled/Disables the leveling system.\n`" + prefix + "setcookie [COOKIE]` - Sets the bot account to the specified cookie. \n`" + prefix + "setgroup [GROUPID]` - Sets the GroupID to rank specified users.")
    .addField(":hammer: Moderation", "`" + prefix + "warn [@USER] [REASON]` - Warns the specified user. \n`" + prefix + "purge [AMMOUNT]` - Gets rid of the mentioned number of messages. \n`" + prefix + "ban [@USER]` - Bans the mentioned user. \n`" + prefix + "warnings [@USER]` - Shows the ammount of warnings the mentioned user has. \n`" + prefix + "kick [@USER] [REASON]` - Kicks the mentioned user. \n`" + prefix + "viewstatus [@USER]` - View a user's premium status you mention. \n`" + prefix + "logschannel [CHANNELID]` - Sets the log channel for promotions, demotions, etc.")
    msg.channel.send(e)
    
}
