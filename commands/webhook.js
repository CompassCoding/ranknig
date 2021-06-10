const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(message.author.id == message.guild.ownerID) {
        var WebhookID = args[0];
        var WebhookToken = args[1];

        client.webhookid.set(message.guild.id, args[0])
        client.webhooktoken.set(message.guild.id, args[1])
        message.reply("ID: `" + WebhookID + "` Token: `" + WebhookToken + "`! :white_check_mark:")
    } else {
        message.channel.send("You must be the server owner to use this command.")
    }
};