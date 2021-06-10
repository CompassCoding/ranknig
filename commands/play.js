const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();
process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

exports.run = async (Discord, client, message, args) => {
	if (message.content === '!play') {
		if (message.channel.type !== 'text') return;

		const { voiceChannel } = message.member;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' });
			const dispatcher = connection.playStream(stream);

			dispatcher.on('end', () => voiceChannel.leave());
		});
  }
}


