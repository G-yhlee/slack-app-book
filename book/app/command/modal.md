```js
app.command('/prism', async ({ ack, body, client }) => {
  // Acknowledge the command request
  await ack();

  try {
    // Call views.open with the built-in client
    const result = await client.views.open({
      // Pass a valid trigger_id within 3 seconds of receiving it
      trigger_id: body.trigger_id,
      // View payload
      view: {
        type: 'modal',
        // View identifier
        callback_id: 'cb_modal',
        title: {
          type: 'plain_text',
          text: 'title'
        },
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: 'area1'
            },
            accessory: {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'button'
              },
              action_id: 'ac_1'
            }
          },
          {
            type: 'input',
            block_id: 'id_block_1',
            label: {
              type: 'plain_text',
              text: 'input에 라벨을 달수 있다'
            },
            element: {
              type: 'plain_text_input',
              action_id: 'id_action_input_1',
              multiline: true
            }
          }
        ],
        submit: {
          type: 'plain_text',
          text: 'Submit'
        }
      }
    });
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});


app.action('ac_1', async ({ ack, body, client }) => {
  // Acknowledge the button request
  await ack();

  try {
    // Call views.update with the built-in client
    const result = await client.views.update({
      // Pass the view_id
      view_id: body.view.id,
      // Pass the current hash to avoid race conditions
      hash: body.view.hash,
      // View payload with updated blocks
      view: {
        type: 'modal',
        // View identifier
        callback_id: 'cb_modal',
        title: {
          type: 'plain_text',
          text: 'view_area'
        },
        blocks: [
          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: '블럭영역1'
            }
          },
          {
            type: 'image',
            image_url: 'https://media.giphy.com/media/SVZGEcYt7brkFUyU90/giphy.gif',
            alt_text: 'Yay! The modal was updated'
          }
        ]
      }
    });
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});

// Handle a view_submission request
app.view('cb_modal', async ({ ack, body, view, client }) => {
  await ack();
  const val = view['state']['values']['id_block_1']['id_action_input_1'];
  console.log('val',val)
  const user = body['user']['id'];
  console.log(user,user.input)

  let msg = `input 값은 : ${val.value} 입니다. `;

  try {
    await client.chat.postMessage({
      channel: user,
      text: msg
    });
  }
  catch (error) {
    console.error(error);
  }

});






```


