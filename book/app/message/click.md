```javascript

app.message('click', async ({ message, say }) => {
  console.log(message.user)
  const payload = kit.messageKit.click({action_id1: 'a1'})
  await say(payload);
});
app.action('a1', async ({ body, ack, say }) => {
  await ack();
  await say("clicked");
});

```