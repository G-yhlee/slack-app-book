### message_preview
```md
https://app.slack.com/block-kit-builder/TCSMAMLLD#%7B%22blocks%22:%5B%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22click%22%7D,%22accessory%22:%7B%22type%22:%22button%22,%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Click%22%7D,%22action_id%22:%22button_click%22%7D%7D%5D%7D


kit: {blocks,text}
- blocks: [{type,text,accessory}]
- type: section 
- text: {type,text}
- accessory: {type,text,acction_id}


```
```javascript
{
	"blocks": [
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
		}
	]
}
```