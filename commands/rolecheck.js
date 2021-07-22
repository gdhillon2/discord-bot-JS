module.exports = {
    name: 'rolecheck',
    description: "checks if you have youtube role",
    execute(message, args){
        if(message.member.roles.cache.some(r => r.name === "youtube")){
            message.channel.send('you have the youtube role');
        }
        else{
            message.channel.send('you do not have the youtube role');
        }
    }

}