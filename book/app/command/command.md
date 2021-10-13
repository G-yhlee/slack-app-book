### respond || say 
```javascript
app.command('/command', async ({ command, ack, respond ,say}) => {
    // Acknowledge command request
    await ack();
  
    await respond(`https://g-yhlee.gitbook.io/slack-app-book/setting/setting`);
    await say(`https://g-yhlee.gitbook.io/slack-app-book/setting/setting`);    
  });
```

### client.view
```javascript
app.command('/command', async ({ ack, body, client }) => {
  await ack();
  let trigger_id = body.trigger_id
  let view = kit

  client.views.open({trigger_id ,view });

});
```

### client.view && try-catch 패턴

```javascript
app.command('/command', async ({ ack, body, client }) => {
  await ack();
  let trigger_id = body.trigger_id
  let view = kit

  try {
    const result = await client.views.open({trigger_id ,view }); 
    console.log(result); 
  } catch (error) {
    console.error(error);
  }
});

```