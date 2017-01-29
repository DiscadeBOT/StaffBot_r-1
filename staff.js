const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-"
const server = "Nights Of Valor"
const invitelink = "https://discord.gg/4suNThV"
const n1 = "weareno1 "
var newUsers = new Discord.Collection();
const fs = require("fs");
client.on("ready", () => {
  console.log('MOVE TO OFFTOPIC!!')
  client.user.setGame('with the staff.')
});
client.on("message", msg => {
  if (!msg.content.includes('NOV'))
    msg.reply('Move to OFFTOPIC Please!')
});
