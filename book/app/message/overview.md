```javascript
app.message(/^(test|log).*/, async ({ context, message, say, client, event }) => {

  // say | team,channel,userName 가져오기
  const {team} = await app.client.team.info();
  await say(`
  teamId : <@${team.id}>  
  channelId : <@${message.channel}>  
  userName : <@${message.user}> 
  `);

  // 쓰레드에 메세지 보내기  -- 쓰레드에서는 모달 창을 바로 띄울수 없다
  const postMessage = 'client , message{channel,tread_ts}'

  // unfurl 가능 
  const unfurl = 'client.chat.unfurl , event{channel,event.event_ts} '

  // 봇 토큰 가져오기
  const botToken = 'context'

});
```

