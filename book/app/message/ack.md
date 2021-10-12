```javascript
// https://slack.dev/bolt-js/concepts#acknowledge

// 확인이 필요한 액션, 명령 들은 3초 시간내에 ack() 으로 응답을 보내줘야 한다.


app.command('/guide', async ({ command, ack, respond ,say}) => {
    // Acknowledge command request
    await ack();
  
    await respond(`https://g-yhlee.gitbook.io/slack-app-book/setting/setting`);
    await say(`https://g-yhlee.gitbook.io/slack-app-book/setting/setting`);    
  });
```


