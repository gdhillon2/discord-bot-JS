module.exports = {
    name: 'permcheck',
    description: "checks if you have specific permission",
    execute(message, args){
        let role = message.guild.roles.cache.find(r => r.name === "mod")

        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('You have the permission to kick members');
        }
        else{
            message.channel.send('You do not have the permission to kick members');
        }
    }

}