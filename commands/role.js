module.exports={
name: 'reactionrole',
async execute(message,args,Discord,client){
    const channel = '934005282118459415';
    const role1=message.guild.roles.cache.find(role=>role.name==="<@&986141212111175740>");
    const role2=message.guild.roles.cache.find(role=>role.name==="<@&986141246500241448>");
    const role3=message.guild.roles.cache.find(role=>role.name==="<@&986195780471758879>");

    const role1Emoji='???';
    const role2Emoji='??';
    const role3Emoji='?';


    let messageEmbed = await message.channel.send('옵치계의 매니 파퀴아오, YBT 의 디스코드에 오신 여러분을 환영합니다.\n
        YBT를 제외한 서버내 유저간의 친목은 금지입니다. 이 점 잘 숙지하시어 재밌는 디스코드 활동 이어 나가시기를 바랍니다.\n\n
        아래 이모지를 클릭하시면 역할이 자동 부여됩니다.\n
        자신의 주 포지션을 선택하여 이모지를 클릭하시면 됩니다.\n'+`${???}: 탱커 ${??}: 딜러 ${?}: 힐러`,{file:['YBT.png']});
    messageEmbed.react(role1Emoji);
    messageEmbed.react(role2Emoji);


    client.on('messageReactionAdd', async(reaction,user) =>{
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;

        if(reaction.message.channel.id == channel){
            if(reaction.emoji.name === role1Emoji){
                await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
            }
            if(reaction.emoji.name === role2Emoji){
                await reaction.message.guild.members.cache.get(user.id).roles.add(role2);
            }
            if(reaction.emoji.name === role2Emoji){
                await reaction.message.guild.members.cache.get(user.id).roles.add(role3);
            }
            else{
                return;
            }
        }
    });

    client.on('messageReactionRemove', async(reaction,user) =>{
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;

        if(reaction.message.channel.id == channel){
            if(reaction.emoji.name === role1Emoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
            }
            if(reaction.emoji.name === role2Emoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role2);
            }
            if(reaction.emoji.name === role2Emoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role3);
            }
            else{
                return;
            }
        }
    });
}
}