const superagent = require('superagent')

exports.run = async (Discord, client, message, args) => {
    let msg = await message.channel.send("Generating...")
    let {body} = await superagent.get(`https://api-to.get-a.life/meme`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("The command failed! Try again.")

    let mEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setImage(body.url)
    message.channel.send({embed: mEmbed})

    msg.delete();
}