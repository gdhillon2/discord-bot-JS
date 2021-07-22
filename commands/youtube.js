module.exports = {
    name: 'youtube',
    description: "sends link to youtube homepage",
    execute(message, args){
        if(message.member.roles.cache.has('849059442753273907')){
            message.channel.send('https://www.youtube.com');
        }
        else{
            message.channel.send('added youtube role');
            message.member.roles.add('849059442753273907').catch(console.error);
        }
    }

}