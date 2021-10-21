```javascript
app.event('link_shared', async ({event,client}) => {
  const {channel = event.channel, ts = event.message_ts, url = event.links[0].url }  = {}
  const payload = kit.preview({channel,ts,url})
  client.chat.unfurl(payload)
});
```

