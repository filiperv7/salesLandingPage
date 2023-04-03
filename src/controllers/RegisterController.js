const { log } = require("console");
const knex = require("../database");

module.exports = {
  async create(req, res, next) {
    try {
      const { name, email, telefone } = req.body;
      await knex("register").insert({
        name,
        email,
        telefone,
      });
      return res.status(201).send();
    } catch (err) {
      next(err);
    }
  },
};
