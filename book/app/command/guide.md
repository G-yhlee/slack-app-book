## 프로젝트 세팅 - 명령어 생성하기
```js

`command` api 를 사용하기 위해서는, 명령어를 등록해야합니다.

[myapp] - [Slash Commands] - [Create New Command]

```

```js
// app.js

const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

app.command('/guide', async ({ command, ack, respond ,say}) => {
    // Acknowledge command request
    await ack();
  
    await respond(`https://g-yhlee.gitbook.io/slack-app-book/setting/setting`);
    await say(`https://g-yhlee.gitbook.io/slack-app-book/setting/setting`);    
  });

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();



```


