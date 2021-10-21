```javascript
app.message('thread_ts', async ({ message, say ,client}) => {
  client.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: message.channel,
    thread_ts: message.thread_ts,
    text: "Hello again :wave:",
    blocks: kit.blocksKit.click({action_id1: "a1"}),
  });  
});
```