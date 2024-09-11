const express = require("express")
const cliente = require("./router/clientes.js");
const pet = require("./router/pets.js")
const porta = 3000;
const app = express();


app.use(express.json());
app.use("/cliente", cliente);
app.use("/pet", pet);


app.listen(porta, () => {
    console.log(`Server running in ${porta} port.`);
})