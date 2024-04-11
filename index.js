const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Calcutta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1226769845018820609')
    .setType('STREAMING')
    .setURL('https://twitch.tv/ConqueringDarkness') //Must be a youtube video link 
    .setState('dsc.gg/divinestore')
    .setName('dsc.gg/divinestore')
    .setDetails(`dsc.gg/divinestore`) //[${formatTime()}] and this for showing time of stream.
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/791210506861150211/1227968035269247016/Project_114_AA1D151-ezgif.com-video-to-gif-converter.gif?ex=662a555a&is=6617e05a&hm=d33abb2afab1dc01b38772c50c776c5fd989c1c7f60f6bbaa3e692541f8f716e&=&width=473&height=473') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Join Now!') //Text when you hover the Large image
    .addButton('Join Divine!', 'https://dsc.gg/divinestore')
    .addButton('About Me!', 'https://guns.lol/darkk');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Divine Market`; //[${newTime}] set this for time 
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
