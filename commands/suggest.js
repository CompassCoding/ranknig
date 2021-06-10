exports.run = async (Discord, client, message, args) => {
    if(!args[0]) return message.reply("Please type a suggestion for the bot owners to look at!");

    let suggestion = args.slice(0).join(" ");

    let sicon = client.user.avatarURL();
    let suggestEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .addField("Suggestion By:", message.author)
    .addField("Suggestion:", suggestion)
    .addField("Sent in:", message.channel.name) 

    let msg = await client.channels.get(`845556267275386890`).send(suggestEmbed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅");
            message.delete({timeout: 1000});
        }).catch(function(error) {
            console.log(error);
        });

    message.channel.send("Your suggestion was sent. We will look over it shortly.")

    var Mod1 = message.author
    var embed2 = new Discord.MessageEmbed()
    .setAuthor(Mod1.tag, Mod1.displayAvatarURL())
    .setTitle("Suggestion Log")
    .setColor("GREEN")
    .setDescription("Suggestion by " + message.author.username + "\n Roblox User: " + message.member.nickname +"\n")
    .addField("Suggestion:", suggestion)
    .setFooter("Suggestion Log")
    .setTimestamp()
    client.channels.get(`845556267275386890`).send(embed2)
    client.channels.get(`845556267275386890`).send("<@!845148118487269376>")
}   