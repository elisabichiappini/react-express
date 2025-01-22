//modulo dotenv
const dotenv = require("dotenv");
dotenv.config();

//modulo express
const express = require("express");
//per importare il mio modulo express devo creare la mia app
const app = express();
//porta default 3000
const port = process.env.PORT || 3000;

//definiamo le rotte
app.get('/', (req, res) => {
    getJoke(barza => res.send(`<h1>${barza}</h1>`));
})

app.listen(port, () => {
    console.log(`Server avviato su questa porta http://localhost:${port}`);
})