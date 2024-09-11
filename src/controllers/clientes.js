const Cliente = require("../models/clientes.js")

const store = (req, res) => {
    Cliente.create(req.body);
    res.json();
}


const index = async (req, res) => {
        const content = await Cliente.find().exec();
        res.status(200).json(content);
};

const show = async (req, res) => {
        const content = await Cliente.findById(req.params.id).exec();
        res.status(200).json(content);  
};
const update = (req, res) => {
    Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec();
    res.json();
}

const destroy = (req, res) => {
    Cliente.findByIdAndDelete(req.params.id).exec;
    res.json();
}

module.exports = {
    store,
    update,
    index,
    show,
    destroy
}