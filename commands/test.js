exports.run = async (Discord, client, message, args) => {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const days = client.redcodes.get(message.author.id)
    new Date(Date.now() + days * MS_PER_DAY)

    const n = new Date(Date.now() + days * MS_PER_DAY)
    console.log(n)
}