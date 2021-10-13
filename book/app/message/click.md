```javascript

// accessory { type, text, action_id }
// type
// blocks { type,text,accessory } 


app.message('click', async ({ message, say }) => {
  console.log(message.user)
  
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "click"
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click"
          },
          "action_id": "button_click" // action_id 는 임의의 이름으로 변경 가능
        }
      }
    ],
    text: "click..."
  });
});


app.action('button_click', async ({ body, ack, say }) => {
  console.log(body.user.id)

  await ack();
  await say("clicked");
});
```