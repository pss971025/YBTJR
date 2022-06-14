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


    let messageEmbed = await message.channel.send('��ġ���� �Ŵ� �����ƿ�, YBT �� ���ڵ忡 ���� �������� ȯ���մϴ�.\n
        YBT�� ������ ������ �������� ģ���� �����Դϴ�. �� �� �� �����Ͻþ� ��մ� ���ڵ� Ȱ�� �̾� �����ñ⸦ �ٶ��ϴ�.\n\n
        �Ʒ� �̸����� Ŭ���Ͻø� ������ �ڵ� �ο��˴ϴ�.\n
        �ڽ��� �� �������� �����Ͽ� �̸����� Ŭ���Ͻø� �˴ϴ�.\n'+`${???}: ��Ŀ ${??}: ���� ${?}: ����`,{file:['YBT.png']});
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