const ms = require("ms");

exports.run = async (Discord, client, message, args) => {
    const enmap = client.code;
    const enmap2 = client.premiumusers;
      const enmap4 = client.premiumuserstext;

    const enmap3 = client.redcodes;
    var code = args[0];
    const days = enmap.get(code)
   
    var e = new Discord.RichEmbed()
    .setTitle(":white_check_mark: Successfully redeemed Premium!")
    .setColor("GREEN")
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription("Congrats! You have successfully redeeemed your premium key! You've been given `" + days + "` days of EasyRanking Premium. Check DMs for more infomation about what EasyRanking Premium actually is.")
    var e2 = new Discord.RichEmbed()
    .setTitle(":x: Error Redeeming Premium!")
    .setColor("RED")
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription("Oh No! Please ensure that your premium key is correct, or it has not been claimed already, otherwise please contact support.")
    var e3 = new Discord.RichEmbed()
    .setTitle(":warning: Error Redeeming Premium!")
    .setColor("ORANGE")
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription("Oops! It appears you are already a premium member, so you can not redeem another code, however you can transfer your current license to another user by saying `!transfer <USER ID>`!")

    if(enmap2.has(message.author.id)) {
        return message.channel.send(e3)
    }
    if(!enmap.has(`${code}`)) {
        return message.channel.send(e2)
    }
    if(enmap.has(`${code}`)) {
        enmap2.set(message.author.id, "Active")
              enmap4.set(message.author.id, "Active")

        enmap3.set(message.author.id, days)
        enmap.get(code)
        message.author.send(":white_check_mark: **Welcome to EasyRanking Premium!**\nG'day! Thanks so much for redeeming a premium license from EasyRanking. It helps us grow and become overall bigger! It also helps to fund important hosting costs, etc. It also gives you access to premium commands on any server that has EasyRanking on it. Your current license will be activate for a total of: `" + days + "` days.\nIf you wish to transfer your license to another user simply say `!transfer <user>` and `!untransfer <user>` to untransfer.\nSupport Server: https://discord.gg/GtGs9p5nbp\nThanks again! ***EasyRanking Team***")
        enmap.delete(`${code}`)
        
        
       return message.channel.send(e)
    }
} 