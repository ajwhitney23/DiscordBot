require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";


var helpMessage = "Start your commands with a '!' \n Current commands are: \n !ping \n !help";

client.login(process.env.DISCORD_TOKEN);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    
});

//listener for when user sends a message
client.on('message', msg => {
    let ownerRole = msg.guild.roles.cache.find(role => role.name === 'Owner');
    let memRole = msg.guild.roles.cache.find(role => role.name.toLowerCase() === 'member');
    if(msg.content === '!ping'){
        msg.reply('pong');
    }
    if(msg.content === '!help'){
        msg.reply(helpMessage);
    }
    if(msg.content === "!clearRecent"){
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.messages.fetch({limit: 10});
            msg.channel.bulkDelete(fetched);
        }
        if(msg.member.roles.cache.has(ownerRole.id)){
            clear();
            msg.channel.send('Last 10 Messages Cleared! :D');
        }
        else {
            msg.channel.send('You must be owner to do this');
        }
    }
    // if(msg.content === "!games"){
    //     msg.reply("\n !valorant to access the valorant ranked! \n !rainbow to access the rainbow six siege ranked!");
    // }
    // if(msg.content.toLowerCase() === "!valorant"){
    //     let valrole = msg.guild.roles.cache.find(role => role.name.toLowerCase() === 'valorant');
    //     if(msg.member.roles.cache.has(valrole.id)){
    //         msg.reply("You already have that role!");
    //     }
    //     else if(msg.member.roles.cache.has(memRole.id)){
    //         msg.member.roles.add(valrole).then(
    //             msg.reply("Role successfully added!")
    //         );
    //     }
    //     else {
    //         msg.reply("You are not a member!");
    //     }
    // }
    // if(msg.content.toLowerCase() === "!rainbow"){
    //     let rainbowRole = msg.guild.roles.cache.find(role => role.name.toLowerCase() === 'rainbow six siege');
    //     if(msg.member.roles.cache.has(rainbowRole.id)){
    //         msg.reply("You already have that role!");
    //     }
    //     else if(msg.member.roles.cache.has(memRole.id)){
    //         msg.member.roles.add(rainbowRole)
    //             .then(msg.reply("Role successfully added!"));
    //     }
    //     else {
    //         msg.reply("You are not a member!");
    //     }
    // }
    // if(msg.content.toLowerCase().has("!mute"))
    // {
    //     let ownerRole = msg.guild.roles.cache.find(role => role.name.toLowerCase() === 'owner');
    //     let modRole = msg.guild.roles.cache.find(role => role.name.toLowerCase() === 'mod');
    //     let mutedRole = msg.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted');
    //     if(msg.member.roles.cache.has(ownerRole.id) || msg.member.roles.cache.has(modRole.id))
    //     {
    //         let name = msg.content.substring(6);
    //         //console.log(name);
    //         let mem = msg.guild.members.cache.find(m => m.name.toLowerCase() === name);
    //         if(!mem.roles.cache.has(ownerRole.id) || !mem.roles.cache.has(modRole.id))
    //         {
    //             mem.roles.add(mutedRole).then(msg.reply("Your wish is my command."));
    //         }
    //         else
    //         {
    //             msg.reply("Your wish is not my command.");
    //         }
    //     }
    //     else {
    //         msg.reply("You do not have permission to do that");
    //     }
    // }
    if(msg.content.toLowerCase() === (prefix + "rustsettings"))
    {
        //print link to rust settings
    }

});