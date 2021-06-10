const xp = require('../xp.json');

exports.run = async (Discord, client, message, args) => {
    if(!xp[message.author.id]){
        xp[message.author.id] = {
          xp: 0,
          level: 1
       };
     }

     let curxp = xp[message.author.id].xp;
     let curlvl = xp[message.author.id].level;
     let nxtLvlXp = curlvl * 300;
     let difference = nxtLvlXp - curxp;

     let lvlembed = new Discord.RichEmbed()
     .setAuthor(message.author.tag, message.author.displayAvatarURL())
     .setColor("GREEN")
     .addField("Level", curlvl, true)
     .setFooter(`${difference} XP until next level up.`)
     .setTimestamp()
     message.channel.send(lvlembed)
}