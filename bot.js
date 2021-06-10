const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const token = require('./token.json');
const xp = require('./xp.json');
const fs = require("fs");

client.admins = ['481941149620371462'];
client.code = new Enmap({provider: new EnmapLevel({name: "codes"})});
client.premiumusers = new Enmap({provider: new EnmapLevel({name: "premusers"})});
client.premiumuserstext = new Enmap({provider: new EnmapLevel({name: "premiumuserstext"})});
client.groupid5 = new Enmap({provider: new EnmapLevel({name: "groupid5"})});

client.groupid2 = new Enmap({provider: new EnmapLevel({name: "groupid2"})});
client.cooldowntransfer = new Enmap({provider: new EnmapLevel({name: "cooldowntransfer"})});
client.blacklist = new Enmap({provider: new EnmapLevel({name: "blacklist"})});
client.userid2 = new Enmap({provider: new EnmapLevel({name: "userid2"})});
client.userid90 = new Enmap({provider: new EnmapLevel({name: "userid90"})});
client.userid90reason = new Enmap({provider: new EnmapLevel({name: "userid90reason"})});
client.transferstatus = new Enmap({provider: new EnmapLevel({name: "transferstatus"})});

client.db1 = new Enmap({provider: new EnmapLevel({name: "blacklisted"})});
client.group = new Enmap({provider: new EnmapLevel({name: "groupid"})});
client.redcodes = new Enmap({provider: new EnmapLevel({name: "redeemedcodes"})});
client.cookie = new Enmap({provider: new EnmapLevel({name: "cookie"})});
client.maxrank = new Enmap({provider: new EnmapLevel({name: "maximumrank"})});
client.minrnak = new Enmap({provider: new EnmapLevel({name: "minimumrank"})});
client.actives = new Enmap({provider: new EnmapLevel({name: "actives"})});

client.prefix = new Enmap({provider: new EnmapLevel({name: "prefix"})});
client.logs = new Enmap({provider: new EnmapLevel({name: "ranking"})});
client.warnings = new Enmap({provider: new EnmapLevel({name: "warning"})});
client.xp = new Enmap({provider: new EnmapLevel({name: "XP"})});
client.levelsystem = new Enmap({provider: new EnmapLevel({name: "levelsystem"})});
client.db = new Enmap({provider: new EnmapLevel({name: "users"})});
client.setupcmd = new Enmap({provider: new EnmapLevel({name: "setuplog"})});
client.nickname = new Enmap({provider: new EnmapLevel({name: "names"})});

 const enmap = client.levelsystem;

client.on("ready", () => {
  console.log(`[READY] ${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`); 
  client.user.setActivity(`${client.guilds.size} servers and ${client.users.size} users!`, { type: 'WATCHING' })
}); 

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    // client.user.setStatus("online");
    let users = client.users.size 
    setInterval(function(){  client.user.setPresence({ game: { name: `EasyRanking | ${users} users!`, url: 'https://twitch.tv/easyranking', type: 1 } });; }, 10000);
    setInterval(function(){  client.user.setPresence({ game: { name: `!help | ${client.guilds.size} guilds!`, url: 'https://twitch.tv/easyranking', type: 1 } });; }, 10000);
 
});

client.on("guildCreate", (guild) => {


  if(!client.redcodes.has(guild.ownerID)) {

  }
  if(client.redcodes.has(guild.ownerID)) {
    guild.leave().then(g => console.log(`Left the guild ${g}`)).catch(console.error)
    return;
  }
})
client.on('message', async message => {

if (message.member.roles.cache.has(role => role.name === '⭐ | Premium')) {
    if(!client.actives.get(message.author.id)) {

          client.actives.set(message.author.id,  "activated")
  

     message.channel.send(":tada:"+ '  <@' + message.author.id  + '>' + " Thanks! We have automatically noticed that you purchased EasyRanking Premium. As such we have given you ``30`` days of premium. Enjoy!") 

   
        client.premiumuserstext.set(message.author.id,  "Active, Given by Purchase.")

        client.premiumusers.set(message.author.id,  "Active, Given by Purchase.")
    return;

    }  
}
})
  client.on('message', async message => {

if (message.member.roles.has(role => role.name === 'Server Booster')) { //RGM: - change this to "Server Booster" so it can work BRUH 
    if(!client.actives.get(message.author.id)) {

          client.on.actives.set(message.author.id,  "activated")
  

     message.channel.send(":tada:"+ '  <@' + message.author.id  + '>' + " Thanks! We have automatically noticed that you boosted EasyRanking's discord server. As such we have given you `unlimited` premium until you unboost the server. Enjoy!") 

        client.premiumuserstext.set(message.author.id,  "Active, Given by Nitro Boost.")

        client.premiumusers.set(message.author.id,  "Active, Given by Nitro Boost.")

    }  

}
  })
  
client.on('message', async message => {
  // client.blacklist.delete(message.author.id)

           let prefix = client.prefix.get(message.guild.id) || "!";

        if (!message.content.startsWith(prefix)) return;


  if(client.blacklist.get(message.author.id)) {
     message.channel.send(':grey_exclamation: <@' + message.author.id  + '> ' + 'You have been blacklisted from using EasyRanking. ' + client.blacklist.get(message.author.id) +". ") 
    return;

  }
  if(client.redcodes.get(message.author.id) == 0) {
     message.channel.send('<@' + message.author.id  + '> ' + 'Just so you know your license has expired. As such we have deactivated your license from our system. If you wish to repurchase a license say !donate') 
              client.actives.delete(message.author.id)

       client.redcodes.delete(message.author.id)
       client.premiumusers.delete(message.author.id)

        if(message.author.bot) return;

return;
  }  else {
  if(message.author.bot) return;

  var count = client.redcodes.get(message.author.id);
  setInterval(() => {
      count -= 1;
      client.redcodes.set(message.author.id, 0)
  }, 86400000 ); // 86400000

         if(enmap.has(message.guild.id)) {
           let xpAdd = Math.floor(Math.random() * 7) + 8;

           if(!xp[message.author.id]){
             xp[message.author.id] = {
              xp: 0,
               level: 1
             };
           }
        
        
         let curxp = xp[message.author.id].xp;
           let curlvl = xp[message.author.id].level;
        let nxtLvl = xp[message.author.id].level * 300;
         xp[message.author.id].xp =  curxp + xpAdd;
          if(nxtLvl <= xp[message.author.id].xp){
            xp[message.author.id].level = curlvl + 1;
  
            let lvlup = new Discord.MessageEmbed()
            .setTitle("Level up!")
             .setColor("GREEN")
           .addField("New Level", curlvl + 1)
             .addField("Old Level", curlvl);
  
             message.reply(lvlup)
          }
           fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
             if(err) console.log(err)
           });
        }
         if(!enmap.has(message.guild.id)) {
           console.log(message.guild.id + ' has there leveling system disabled!')
        }

         let prefix = client.prefix.get(message.guild.id) || "!";

       let msg = message.content.toLowerCase();
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();




        if (!message.content.startsWith(prefix)) return;
    
             try {
                let cmdFile = require(`./commands/${cmd}.js`);
         
                cmdFile.run(Discord, client, message, args);   
                
             } catch(e) {
      console.log(e)
             }
  }

          


const { Client, Util } = require('discord.js');
const GOOGLE_API_KEY  = require('./config.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const PREFIX = "!"

const youtube = new YouTube("AIzaSyA1_URs__6U6iaDTQVXr9SreXRG0yfnrKY");

const queue = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

const yt = require('ytdl-core');
const tokens = require('./tokens.json');


const commands = {
	'play': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${tokens.prefix}add`);
		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
		if (queue[msg.guild.id].playing) return msg.channel.sendMessage('Already Playing');
		let dispatcher;
		queue[msg.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return msg.channel.sendMessage('Queue is empty').then(() => {
				queue[msg.guild.id].playing = false;
				msg.member.voiceChannel.leave();
			});
			msg.channel.sendMessage(`Playing: **${song.title}** as requested by: **${song.requester}**`);
			dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : tokens.passes });
			let collector = msg.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(tokens.prefix + 'pause')) {
					msg.channel.sendMessage('paused').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(tokens.prefix + 'resume')){
					msg.channel.sendMessage('resumed').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(tokens.prefix + 'skip')){
					msg.channel.sendMessage('skipped').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(tokens.prefix + 'time')){
					msg.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[msg.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('error: ' + err).then(() => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});
			});
		})(queue[msg.guild.id].songs.shift());
	},
	'join': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'add': (msg) => {
		let url = msg.content.split(' ')[1];
		if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a YouTube video url, or id after ${tokens.prefix}add`);
		yt.getInfo(url, (err, info) => {
			if(err) return msg.channel.sendMessage('Invalid YouTube Link: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			msg.channel.sendMessage(`added **${info.title}** to the queue`);
		});
	},
	'queue': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${tokens.prefix}add`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
		msg.channel.sendMessage(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
	},
	'help': (msg) => {
		let tosend = ['```xl', tokens.prefix + 'join : "Join Voice channel of msg sender"',	tokens.prefix + 'add : "Add a valid youtube link to the queue"', tokens.prefix + 'queue : "Shows the current queue, up to 15 songs shown."', tokens.prefix + 'play : "Play the music queue if already joined to a voice channel"', '', 'the following commands only function while the play command is running:'.toUpperCase(), tokens.prefix + 'pause : "pauses the music"',	tokens.prefix + 'resume : "resumes the music"', tokens.prefix + 'skip : "skips the playing song"', tokens.prefix + 'time : "Shows the playtime of the song."',	'volume+(+++) : "increases volume by 2%/+"',	'volume-(---) : "decreases volume by 2%/-"',	'```'];
		msg.channel.sendMessage(tosend.join('\n'));
	},
	'reboot': (msg) => {
		if (msg.author.id == tokens.adminID) process.exit(); //Requires a node module like Forever to work.
	}
}
})
        

        

client.login(token.token); 