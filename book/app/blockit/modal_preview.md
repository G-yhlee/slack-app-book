### message_preview

### kit1
```md
:c-modal-[:section:a-button,:b-input:a-plain_text_input]
```
```javascript
{
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
```

### kit2
```md
:modal-[:section,:image]
```
```javascript
{
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
```