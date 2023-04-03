const express = require("express");
const knex = require("./database");
const routes = express.Router();

const RegisterController = require("./controllers/RegisterController");

routes.post("/register", RegisterController.create);

module.exports = routes;
