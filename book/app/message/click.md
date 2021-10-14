```javascript

app.message('click', async ({ message, say }) => {
  console.log(message.user)
  const kit = SectionButtonID
  await say(kit);
});

app.action('button_click', async ({ body, ack, say }) => {
  await ack();
  await say("clicked");
});
```