## 프로젝트 세팅 - 명령어 생성하기
```js

`command` api 를 사용하기 위해서는, 명령어를 등록해야합니다.

[myapp] - [Slash Commands] - [Create New Command]

```

```js
app.command('/guide', async ({ command, ack, respond ,say}) => {
    // Acknowledge command request
    await ack();
  
    await respond(`https://g-yhlee.gitbook.io/slack-app-book/setting/setting`);
    await say(`https://g-yhlee.gitbook.io/slack-app-book/setting/setting`);    
  });
```


