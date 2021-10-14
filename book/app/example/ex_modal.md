```javascript
// app.js

const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

const kit1 = {
  "type": "modal",
  "callback_id": "callback_id_MODAL_1",
  "title": {
    "type": "plain_text",
    "text": "title"
  },
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "area1"
      },
      "accessory": {
        "type": "button",
        "action_id": "action_id_BUTTON_1",
        "text": {
          "type": "plain_text",
          "text": "button"
        }
        
      }
    },
    {
      "type": "input",
      "block_id": "block_id_INPUT_1",
      "label": {
        "type": "plain_text",
        "text": "input에 라벨을 달수 있다"
      },
      "element": {
        "type": "plain_text_input",
        "action_id": "action_id_INPUT_1",
        "multiline": true
      }
    }
  ],
  "submit": {
    "type": "plain_text",
    "text": "Submit"
  }
}

const kit2 = {
	"type": "modal",
	"title": {
		"type": "plain_text",
		"text": "view_area"
	},
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "블럭영역1"
			}
		},
		{
			"type": "image",
			"image_url": "https://media.giphy.com/media/SVZGEcYt7brkFUyU90/giphy.gif",
			"alt_text": "Yay! The modal was updated"
		}
	]
}


app.command('/prism', async ({ ack, body, client }) => {
  await ack();
  let {trigger_id } = body
  client.views.open({ trigger_id ,view: kit1 });
});

app.action('action_id_BUTTON_1', async ({ ack, body, client }) => {
  await ack();
  const {id: view_id , hash  } = body.view
  client.views.update({view_id, hash, view: kit2  });
});

app.view('callback_id_MODAL_1', async ({ ack, body, view, client }) => {
  await ack();
  const {value} = view['state']['values']['block_id_INPUT_1']['action_id_INPUT_1'];
  const {id: channel} = body['user'];
  const text =  `input 값은.. ${value} 입니다. `
  await client.chat.postMessage({channel,text});

});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
```