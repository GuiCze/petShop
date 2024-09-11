const express = require("express")
const router = express.Router()

const pet = require("../controllers/pets.js")


router.post("/",  (pet.store))
router.get("/", (pet.index))
router.get("/:id", (pet.show))
router.put("/:id", (pet.update))
router.delete("/:id", (pet.destroy))

module.exports = router;