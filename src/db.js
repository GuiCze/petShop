const mongoose = require('mongoose');

const mongoDB = "mongodb+srv://Mill:212777550@cluster0.pvlc3.mongodb.net/petShop"

async function main() {
    await mongoose.connect(mongoDB);
}

main() 
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err));

module.exports = mongoose;