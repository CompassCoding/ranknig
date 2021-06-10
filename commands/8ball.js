const Discord = require("discord.js");

exports.run = async (bot, message, args, client) => {

    // !say Hi!

//    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No. Oof.");
    let botmessage = args[1];
    message.delete().catch();
    message.channel.send(botmessage);
}

