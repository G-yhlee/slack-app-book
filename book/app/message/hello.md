```ts
app.message('hello', async ({ message, say }) => { 
    await say(` TO: <@${message.user}> hello world! `);
});
```