### message_preview
```md
[:section:a-button]
```
```javascript
{
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "블럭영역"
			}
		},
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
				"action_id": "button_click"
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
