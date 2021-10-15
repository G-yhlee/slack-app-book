```javascript
app.event('app_home_opened', async ({ event, client }) => {
   const view = kit
   const user_id = event.user
   
   client.views.publish({user_id,view})
});
```


