import Discord from 'discord.js';
import Config from './botconfig.json';

const client = new Discord.Client();

client.on("ready", () => {
    console.log("Ready!");
});

client.login(Config.token);