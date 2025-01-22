//MODULO PATH
const path = require("path");
const fs = require("fs");

//THEN CATCH FINALLY
const getJoke = (callback) => {
    fetch('http://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(barza => {
            //leggo le barze con un read json di norris db
            const allBarzas = readJSON('norrisDb');
            // controllo se la frase è già presente in array, se si genero un'altra frase quindi callback dopo
            if (!allBarzas.includes(barza.value)) {
                //salvo un array con le cose di prima e il nuovo -> operatore rest
                writeJSON('norrisDb', [...allBarzas, barza.value]);
                //effettuo la mia callback per ottenere il dato
                callback(barza.value);
            }else {
                console.log('Battuta già presente, ne carico un\'altra.');
                getJoke(callback);
            }

        })
        .catch(error => callback(error.message));
}

const readJSON = (fileName) => {
    const filePath = path.join(__dirname, fileName + '.json');
    const json = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(json);
}

const writeJSON = (fileName, data) => {
    const filePath = path.join(__dirname, fileName + '.json');
    const json = JSON.stringify(data);
    fs.writeFileSync(filePath, json);

}

module.exports = {
    getJoke,
    readJSON
}