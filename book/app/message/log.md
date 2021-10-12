```ts
app.message(/^(test|log).*/, async ({ context, message, say }) => {
    console.log(context)
    console.log(message)
    console.log(say)
});
```

