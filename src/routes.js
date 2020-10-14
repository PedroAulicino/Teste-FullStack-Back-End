const express = require("express");

const routes = express.Router();
const Usuario = require("./controller/usuarios.controllers");
const Produtos = require("./controller/produtos");

routes.get("/", Usuario.index);
//Rotas de Usuarios
routes.post("/usuarios", Usuario.create);
routes.get("/api/usuarios", Usuario.index);
routes.get("/api/usuarios.details/:_id", Usuario.details);
routes.delete("/api/delete/:_id", Usuario.delete);
routes.put("/api/usuarios", Usuario.update);

//Rotas de Produtos
routes.post("/produtos", Produtos.create);
routes.get("/api/produtos", Produtos.index);
routes.get("/api/produtos.details/:_id", Produtos.details);
routes.delete("/api/delete/produtos/:_id", Produtos.delete);
routes.put("/api/produtos/:_id", Produtos.update);
module.exports = routes;
