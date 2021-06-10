const moment = require('moment');
exports.run = async (Discord, client, message, args) => {
  if(message.mentions.members.size == 1) {
        let member = message.mentions.members.first()
        message.channel.send(`${message.author} gave ${member} a smack!`, {
            file: "https://media.giphy.com/media/CZpro4AZHs436/giphy.gif"
        });
    }
}