let a = {
    "type": "modal",
    "callback_id": "cb_modal",
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
          "text": {
            "type": "plain_text",
            "text": "button"
          },
          "action_id": "ac_1"
        }
      },
      {
        "type": "input",
        "block_id": "id_block_1",
        "label": {
          "type": "plain_text",
          "text": "input에 라벨을 달수 있다"
        },
        "element": {
          "type": "plain_text_input",
          "action_id": "id_action_input_1",
          "multiline": true
        }
      }
    ],
    "submit": {
      "type": "plain_text",
      "text": "Submit"
    }
  }