```javascript 
// 원본 보다 짧게
app.message('!getId',async ({ say, body, context, message }) => {
  const {team} = await app.client.team.info();
  await say(`
  teamId : <@${team.id}>  
  channelId : <@${message.channel}>  
  userName : <@${message.user}> 
  `);
})

// 원본
app.message('!getId',async ({ say, body, context, message }) => {
  const teamResponse = await app.client.team.info({
    token: context.botToken,
    user: message.id,
  });

  const team = teamResponse.team;
  await say(`
  teamId : <@${team.id}>  
  channelId : <@${message.channel}>  
  userId : <@${message.user}> 
  `);
})

```