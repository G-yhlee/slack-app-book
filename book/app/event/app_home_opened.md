## 프로젝트 세팅 - 이벤트 활성화 시키기
```js

`event` api 를 사용하기 위해서는, 이벤트를 등록해야합니다.

[myapp] - [Event Subscriptions] - [Enable Events] - [ Add Bot User Event] - [ 사용할 이벤트 등록 ]

여기서는 `app_home_opened` 이벤트를 등록하겠습니다.
```

```js
// app.js
// https://slack.dev/bolt-js/concepts#commands


app.event('app_home_opened', async ({ event, client }) => {
  try {
    // Call views.publish with the built-in client
    const result = await client.views.publish({
      // Use the user ID associated with the event
      user_id: event.user,
      view: {
        // Home tabs must be enabled in your app configuration page under "App Home"
        "type": "home",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Welcome home, <@" + event.user + "> :house:*"
            }
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "Learn how home tabs can be more useful and interactive <https://api.slack.com/surfaces/tabs/using|*in the documentation*>."
            }
          }
        ]
      }
    });

    // console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});


```


