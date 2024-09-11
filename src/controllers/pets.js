const Pet = require("../models/pets.js")

const store = (req, res) => {
    Pet.create(req.body);
    res.json();
}

const index = async (req, res) => {
    try {
        const content = await Pet.find().exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const show = async (req, res) => {
    try {
        const content = await Pet.findById(req.params.id).exec();
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const update = (body, id) => {
    Pet.findByIdAndUpdate(req.paramsid, req.body).exec;
    res.json();
}

const destroy = (req, res) => {
    Pet.findByIdAndDelete(req.params.id).exec;
    res.json();
}

module.exports = {
    store,
    update,
    index,
    show,
    destroy
}