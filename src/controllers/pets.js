const Pet = require("../models/pets.js")

const store = async (req, res) => {
    try {
      const pet = new Pet(req.body);
      await pet.save();
      res.status(201).json(pet);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar o pet' });
    }
  };

const index = async (req, res) => {
    try {
      const clientes = await Pet.find();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao buscar clientes' });
    }
};

const show = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.status(200).json(pet);
  } catch (error) {
    res.status(404).json({ error: 'Pet não encontrado' });
  }
};

const update = async (req, res) => {
    try {
      const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(pet);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar pet' });
    }
};

const destroy = async (req, res) => {
    try {
      await Pet.findByIdAndDelete(req.params.id);
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar pet' });
    }
  };

module.exports = {
    store,
    update,
    index,
    show,
    destroy
}