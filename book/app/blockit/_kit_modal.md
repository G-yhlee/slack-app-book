### modal preview

```md
https://app.slack.com/block-kit-builder/TCSMAMLLD#%7B%22type%22:%22modal%22,%22title%22:%7B%22type%22:%22plain_text%22,%22text%22:%22My%20App%22,%22emoji%22:true%7D,%22submit%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Submit%22,%22emoji%22:true%7D,%22close%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Cancel%22,%22emoji%22:true%7D,%22blocks%22:%5B%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22%EC%84%B9%EC%85%98%20%EC%98%81%EC%97%AD%EC%9E%85%EB%8B%88%EB%8B%A4.%20%22%7D%7D,%7B%22type%22:%22input%22,%22element%22:%7B%22type%22:%22checkboxes%22,%22options%22:%5B%7B%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22%EC%98%B5%EC%85%981%22,%22emoji%22:true%7D,%22value%22:%22value-0%22%7D,%7B%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22%EC%98%B5%EC%85%982%22,%22emoji%22:true%7D,%22value%22:%22value-1%22%7D%5D%7D,%22label%22:%7B%22type%22:%22plain_text%22,%22text%22:%22%EC%84%A4%EB%AA%85%22,%22emoji%22:true%7D%7D%5D%7D
```

```javascript
{
	"type": "modal",
	"title": {
		"type": "plain_text",
		"text": "My App",
		"emoji": true
	},
	"submit": {
		"type": "plain_text",
		"text": "Submit",
		"emoji": true
	},
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "섹션 영역입니다. "
			}
		},
		{
			"type": "input",
			"element": {
				"type": "checkboxes",
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "옵션1",
							"emoji": true
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "옵션2",
							"emoji": true
						},
						"value": "value-1"
					}
				]
			},
			"label": {
				"type": "plain_text",
				"text": "설명",
				"emoji": true
			}
		}
	]
}
```