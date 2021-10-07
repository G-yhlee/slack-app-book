```js
// app.js
app.message(/^(test|log).*/, async ({ context, message, say }) => {
    // RegExp matches are inside of context.matches
    console.log(context)
    console.log(message)
    console.log(say)
});

```