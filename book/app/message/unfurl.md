```javascript
app.message('https://huebot.netlify.app/', async ({ message, say, client ,event}) => { 

const {channel = event.channel, ts = event.event_ts, url = `${message.text}`.replace(/<|>/g, "") }  = {}
const payload = kit.preview({channel,ts,url})
client.chat.unfurl(payload)

});
```

