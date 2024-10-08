const express = require("express")
const router = express.Router()

const cliente = require("../controllers/clientes.js")
const cep_endereco = require("../middlewares/cep_endereco.js")


router.post("/",cep_endereco,  cliente.store)
router.get("/", cliente.index)
router.get("/:id", cliente.show)
router.put("/:id",cep_endereco, cliente.update)
router.delete("/:id", cliente.destroy);

module.exports = router;