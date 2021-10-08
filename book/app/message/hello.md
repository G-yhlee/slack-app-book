

## Hello World!
```js

1. 파일 생성 : app.js 생성
2. 코드 작성 : app.js 에 아래의 코드 작성
3. 앱 실행 : node app.js

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

app.message('hello', async ({ message, say }) => { 
    await say(` TO: <@${message.user}> hello world! `);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();


```


