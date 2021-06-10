exports.run = async (Discord, client, message, args) => {
    const enmap = client.cookie;
    var id = args[0];
    if (message.member.hasPermission('MANAGE_SERVER')) {
        message.delete();
        if(!id) {
            return message.channel.send("Please supply a group ID to add to the database.")
        }
    
        if(!enmap.has(message.guild.id)) {
            enmap.set(message.guild.id, id)
            return message.channel.send(":white_check_mark: Successfully saved the cookie to the database.")
        }
        if(enmap.has(message.guild.id)) {
            enmap.set(message.guild.id, id)
            return message.channel.send(":white_check_mark: Successfully saved the cookie to the database.")
        }
    } else {
        message.channel.send("You don't meet the permissions required for this command: `You need the permission MANAGE_SERVER`")
    }

}