```js
app.command('/guide', async ({ command, ack, respond ,say}) => {
    // Acknowledge command request
    await ack();
  
    await respond(`https://g-yhlee.gitbook.io/slack-app-book/setting/setting`);
    await say(`https://g-yhlee.gitbook.io/slack-app-book/setting/setting`);    
  });
```


