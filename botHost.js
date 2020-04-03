const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.login(process.env.NjU0OTQyNTg2Mzc2ODE0NjAy.XoZnCg.JW40o_-ZKKfQtK9cbeX3aLR4hFk);
