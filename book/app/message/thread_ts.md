```javascript
app.message('thread_ts', async ({ message, say ,client , context}) => {
  ch = message.channel
  ts = message.thread_ts
  
  client.chat.postMessage({
    channel: message.channel,
    thread_ts: message.thread_ts,
    text: "Hello again :wave:",
    blocks: kit.blocksKit.click({action_id1: "a1"}),
  });  
  
});

```