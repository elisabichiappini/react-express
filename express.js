//modulo dotenv
const dotenv = require("dotenv");
dotenv.config();

//modulo express
const express = require("express");
//per importare il mio modulo express devo creare la mia app
const app = express();
//porta default 3000
const port = process.env.PORT || 3000;

//importo modulo di getJoke
const { getJoke, readJSON } = require('./utils.js');

//definiamo le rotte
app.get('/', (req, res) => {
    getJoke(barza => res.send(`<h1>${barza}</h1>`));
});

app.get('/list', (req, res) => {
    const barze = readJSON('norrisDB');
    let html = '<div><ul>'
    barze.forEach(barza  => html += `<li>${barza}</li>`);
    html += '</ul></div>'
    res.send(html);
})

app.listen(port, () => {
    console.log(`Server avviato su questa porta http://localhost:${port}`);
})