```javascript
const SectionButtonID = {
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
				"action_id": "SectionButtonID"
			}
		}
	]
}
```


```javascript
const kit = {
    HomeBlock : (v)=> ({
    "type": "home",
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*Welcome! home, <@" + v + "> :house:*"
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
  })
}

```