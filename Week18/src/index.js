'use strict'; //TODO: figure out what this means!

const Express = require('express');
const PORT = 4000;
const app = new Express();

app.get('/', (req, res) => {
    res.send('Hello World! This is homework!')
})

app.put('/', (req, res) => {
    res.send('Hello World! You are putting!')
})

app.listen(PORT, error => {
  if (error)
    return console.error(error);

  console.log(`Yer server was started on http://localhost:${PORT}`);
});
