```javascript
// User Info 를 가져오는 방법 정리

// message
app.message('getUserInfo', async ({ message, client }) => { 
    console.log(await client.users.info({ user: message.user}))
});

// command
app.command('/command', async ({ ack, body, client }) => {
    await ack();
    console.log(await client.users.info({ user: body.user_id}))
}    

// event
app.event('app_home_opened', async ({ event, client }) => {
    console.log(await client.users.info({ user: event.user}))
});

// command
app.view('view', async ({ ack, body, client }) => {
    await ack();
    console.log(await client.users.info({ user: body.user_id}))
}    

```