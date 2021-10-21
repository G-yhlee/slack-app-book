## message

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

## 모달창
- app.action- {body, client}
- app.command - {body, client}

```javascript
app.action('a1', async ({ body, ack,client }) => {
  await ack();
  const trigger_id = body.trigger_id
  const {action_id1 = "a1" , action_id2 = "a2",block_id1 = "b1",block_id2 = "b2" , callback_id1 = "c1" } = {}

  const view = kit.modal({action_id1,action_id2,block_id1,block_id2,callback_id1})
  client.views.open({trigger_id ,view });
});

app.command('/prism', async ({ ack, body, client }) => {
  await ack();
  const trigger_id = body.trigger_id
  const {action_id1 = "a1" , action_id2 = "a2",block_id1 = "b1",block_id2 = "b2" , callback_id1 = "c1" } = {}

  const view = kit.modal({action_id1,action_id2,block_id1,block_id2,callback_id1})
  client.views.open({trigger_id ,view });
});

```

## message

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

