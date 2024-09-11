const db = require("../db.js")

const Schema = db.Schema;

const clienteSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: Schema.Types.Mixed,
        required: true
    },
    numero_casa: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
});

const Cliente = db.model("cliente", clienteSchema);


module.exports = Cliente;