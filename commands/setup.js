exports.run = async (Discord, client, message, args) => {
      const m2 = await message.channel.send('Please say the cookie of the account you want to use (***Your message will be deleted***)...')
const filter = m => m.author.id == message.author.id
 const info = message.channel.createMessageCollector(filter, {maxMatches: 1})

 info.on("collect", async m => {
     const cookie = m.content;
  m.delete()

        
   m2.edit('Please send the groupid of the group that you want to use (***Your message will be deleted***)...')
    const group = message.channel.createMessageCollector(filter, {maxMatches: 1})
    group.on('collect', s => {
      const group_id = s.content;
        s.delete()
          const json = {"cookie": cookie, "groupid": group_id}
             client.setupcmd.set(message.guild.id, json)
     });

});
 }