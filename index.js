const Discord  = require('discord.js');
const client = new Discord.Client;

const channelID = '659745788099952640';

client.on('ready', () => {
    console.log('ready !');
    client.user.setActivity('TAHIA 🌴', {type: "WATCHING"});
});

client.on('guildMemberAdd', function (member) {
    updateStatus(member.guild);
});

client.on('guildMemberRemove', function (member) {
    updateStatus(member.guild);
});

client.on('presenceUpdate', function (member) {
    updateStatus(member.guild);
});

function updateStatus(guild){
    let max = guild.memberCount-1;
    let online = guild.members.filter(m => m.presence.status != 'offline').size-1;
    let formatString = '🎉︙En Ligne : ' + online;
    let channel = guild.channels.get(channelID);
    if(channel.name !== formatString){
        channel.setName(formatString);
    }
}

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by DayZoonHD")

client.user.setActivity(`Futur 📡`, {
type: "STREAMING",
url: "https://www.twitch.tv/ninja"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

client.login('NjQ0MTQyMDE4NTkwOTMzMDEy.XgSymw.wG_5RhOqljeGUe_rVf8WYcy_Mg8')
