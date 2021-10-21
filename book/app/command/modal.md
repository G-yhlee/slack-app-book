```javascript
// modal-open
app.command('/modal', async ({ ack, body, client }) => {
  await ack();
  const trigger_id = body.trigger_id
  const {action_id1 = "a1" , action_id2 = "a2",block_id1 = "b1",block_id2 = "b2" , callback_id1 = "c1" } = {}

  const view = kit.modal({action_id1,action_id2,block_id1,block_id2,callback_id1})
  client.views.open({trigger_id ,view });
});

// modal-reaction
app.view('c1', async ({ ack, body, view,client }) => {
  await ack();

  const {user} = await client.users.info({ user: body.user.id })

  const val1 = view['state']['values']['b1']['a1'];
  const val2 = view['state']['values']['b2']['a2'];

  let msg = ` 제목: ${val1.value} 입니다.  내용: ${val2.value} 입니다. `;
  
  await client.chat.postMessage({
    channel: user.id,
    text: msg,
    thread_ts: ts
  });
});
```


