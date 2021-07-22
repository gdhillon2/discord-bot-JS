const Discord = require('discord.js');

const client = new Discord.Client();

const { MessageEmbed } = require('discord.js');

const prefix = '-';

const fs = require('fs');

const fetch = require('node-fetch');

const querystring = require('querystring');

const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('discordBot is online!');
});

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping')
    {
        client.commands.get('ping').execute(message, args);
    }
    else if(command == 'youtube')
    {
        client.commands.get('youtube').execute(message, args);
    }
    else if(command == 'rolecheck')
    {
        client.commands.get('rolecheck').execute(message, args);
    }
    else if(command == 'permcheck')
    {
        client.commands.get('permcheck').execute(message, args);
    }
    else if(command === 'rsprice')
    {

        if(!args.length){
            return message.channel.send('You need to supply a search term!');
        }

        const query = querystring.stringify({term: args.join(' ')});

        const {list} = await fetch(`https://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=${query}`).then(response => response.json());

        if(!list.length){
            return message.channel.send(`No results found for **${args.join(' ')}**.`);
        }

        message.channel.send(list[0].price);

        /*const [answer] = list;

        const embed = new MessageEmbed()
            .setColor('#EFFF00')
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .addFields(
                { name: 'price:', value: trim(answer.definition, 1024) },
            );
    

        message.channel.send(embed);*/
    }
})

client.login('ODQ5MDQ3OTAyMjg5Nzg4OTM4.YLVfeg.gsZelcEqWG7DlcxyxxlvdBv_ZhQ');