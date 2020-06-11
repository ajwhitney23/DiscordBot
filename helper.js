require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

var myArgs = process.argv.slice(2);
var myName = myArgs[0];
var action = myArgs[1];

client.login(process.env.DISCORD_TOKEN);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    /*switch(action) {
        case 'mute':
            break;
        case 'deafen':

            break;
        case 'both':

            break;
        default:
            console.log("Error completing task");
            break;
    } */
    let g = client.guilds.cache.find(g=> g.name === "Comebacks Corner");
    let m = g.members.cache.find(u => u.user.username == myName);
    if(m.user.username === myName){
        console.log(m);
    }
    else{
        console.log("error getting user");
    }
    client.destroy();
});

//listener for when user sends a message
client.on('message', msg => {
    

});