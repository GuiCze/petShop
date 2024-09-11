const Cliente = require("../models/clientes.js")

const store = async (req, res) => {
    try {
      const cliente = new Cliente(req.body);
      await cliente.save();
      res.status(201).json(cliente);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar cliente' });
    }
  };

const index = async (req, res) => {
    try {
      const clientes = await Cliente.find();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao buscar clientes' });
    }
};

const show = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(404).json({ error: 'Cliente não encontrado' });
  }
};

const update = async (req, res) => {
    try {
      const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(cliente);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar cliente' });
    }
  };

const destroy = async (req, res) => {
    try {
      await Cliente.findByIdAndDelete(req.params.id);
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar cliente' });
    }
  };

module.exports = {
    store,
    update,
    index,
    show,
    destroy
}