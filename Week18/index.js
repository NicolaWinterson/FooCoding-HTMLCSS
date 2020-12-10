'use strict'; //TODO: figure out what this means!

const Express = require('express');
const PORT = 4000;
const app = new Express();

app.set('view engine', 'ejs') //


//HTTP methods to respond to the requests we make
app.get('/', (req, res) => {
    /* res.send('Hello World! This is homework!') */
    res.render('index')
})

app.get('/contact', (req, res) => {
    /* res.send('This is the contact page!') */
    res.render('contact')
})

app.get('/profile/:name', (req, res) => {
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']}
  res.render('profile', {person: req.params.name, data: data}); //grabbed name from url, passed it to views
  /* res.send('You requested to see a profile with name: ' + req.params.name) */
})

//listening to a port
app.listen(PORT, error => {
  if (error)
    return console.error(error);

  console.log(`Yer server was started on http://localhost:${PORT}`);
});
