const Discord = require('discord.js');
const rbx = require('noblox.js')

exports.run = async(client, message, args) => {
    function pluck(array){
        return array.map(function(item) { return item['name']; })
    }
    
    function hasRole(members, role){
        if(pluck(members.roles).includes(role)){
            return true;
        } else {
            return false;
        }
    }
    
    function isAdmin(message){
        if(
            hasRole(message.member,"Ranking Permissions")
            ){
    
            return true;
        } else {
            return false;
        }
    }

    var Enmap1 = client.webhooktoken
    var Enmap2 = client.webhookid
    const Webhook = new Discord.WebhookClient(Enmap2.get(message.guild.id), Enmap1.get(message.guild.id))

    const MaximumRank = 250;
    const msg = message;
    var AcceptDecline = args[0];
    var Username = args[1];

    if(isAdmin(msg)) {
        if(AcceptDecline == "accept") {
            if(Username) {
                message.channel.send("Checking ROBLOX for `" + Username + "` :clock1:")
                rbx.getIdFromUsername(Username)
                    .then(function(id) {
                        message.channel.send("Attempting to `Accept` `" + Username + "` into the group. :clock1:")
                        rbx.handleJoinRequest(4535734, Username, true)
                            .then(function() {

                                const Embed1 = new Discord.MessageEmbed()
                                .setTitle("Rank Request")
                                .setDescription("A request was made to rank, and suceeded.")
                                .addField("Group", 4535734, true)
                                .addField("UserID", id, true)
                                .addField("Status", "Complete", true)
                                .addField("Action", "Accept Join Request", true)
                                .setFooter("All Rights Reserved, Roverify Ranking")
                                .setColor("GREEN")
                                .setTimestamp()


                                Webhook.send({embeds: [Embed1]})
                                message.channel.send("`" + Username + "` has been successfully accepted into the group! :white_check_mark:")
                            }).catch(function(err) {
                                message.channel.send("Failed to fire: " + err)
                            });
                    }).catch(function(err) {
                        message.channel.send("`" + Username + "` is not on the ROBLOX platform.")
                    })
            } else {
                message.channel.send("Please include a user.")
            }
        }
        if(AcceptDecline == "decline") {
            if(Username) {
                message.channel.send("Checking ROBLOX for `" + Username + "` :clock1:")
                rbx.getIdFromUsername(Username)
                    .then(function(id) {
                        message.channel.send("Attempting to `Decline` `" + Username + "` into the group. :clock1:")
                        rbx.handleJoinRequest(4535734, Username, false)
                            .then(function() {

                                const Embed1 = new Discord.MessageEmbed()
                                .setTitle("Rank Request")
                                .setDescription("A request was made to rank, and suceeded.")
                                .addField("Group", 4535734, true)
                                .addField("UserID", id, true)
                                .addField("Status", "Complete", true)
                                .addField("Action", "Decline Join Request", true)
                                .setFooter("All Rights Reserved, Roverify Ranking")
                                .setColor("GREEN")
                                .setTimestamp()


                                Webhook.send({embeds: [Embed1]})
                                message.channel.send("`" + Username + "` has been successfully denied! :white_check_mark:")
                            }).catch(function(err) {
                                message.channel.send("Failed to decline: " + err)
                            });
                    }).catch(function(err) {
                        message.channel.send("`" + Username + "` is not on the ROBLOX platform.")
                    })
            } else {
                message.channel.send("Please include a user.")
            }
        }
    } else {
        message.channel.send("You do not have permissions to use this command! :x:")
    }
    return;
};