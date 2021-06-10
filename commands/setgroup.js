exports.run = async (Discord, client, message, args) => {
    if (!message.member.hasPermission('MANAGE_SERVER')) return message.channel.send("This requires you to have the permission `MANAGE_SERVER` in this server. If you believe this is a problem, contact a server administrator or contact our Support Team!")
    const enmap = client.group;
    var id = args[0];

    if(!id) {
        return message.channel.send("Please supply a group ID to add to the database.")
    }

    if(!enmap.has(message.guild.id)) {
        enmap.set(message.guild.id, id)
        return message.channel.send(":white_check_mark: Successfully saved the id `" + id + "` to the database.")
    }
    if(enmap.has(message.guild.id)) {
        enmap.set(message.guild.id, id)
        return message.channel.send(":white_check_mark: Successfully saved the id `" + id + "` to the database.")
    }

}