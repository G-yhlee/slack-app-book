```js
// app.js
app.message(/^(test|log).*/, async ({ context, message, say }) => {
    console.log(context)
    console.log(message)
    console.log(say)
});

const whenSeptemberEnds = '1569887999';

app.message('wake me up', async ({ message, client }) => {
  try {
    // Call chat.scheduleMessage with the built-in client
    const result = await client.chat.scheduleMessage({
      channel: message.channel,
      post_at: whenSeptemberEnds,
      text: 'Summer has come and passed'
    });
  }
  catch (error) {
    console.error(error);
  }
});
```

