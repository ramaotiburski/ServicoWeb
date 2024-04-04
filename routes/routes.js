const express = require("express")
const controller = require("../controllers/controller")

const routes = express.Router()
  
routes.get("/pessoas",controller.getAllPessoas)
routes.get("/pessoas/:id",controller.getPessoaById)
routes.post("/pessoas",controller.createPessoa)
routes.put("/pessoas/:id",controller.updatePessoa)
routes.delete("/pessoas/:id",controller.deletePessoa)

module.exports = routes