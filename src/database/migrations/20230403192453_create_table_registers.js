/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("register", (table) => {
    table.increments("id").unique();
    table.text("name").notNullable();
    table.text("email").unique().notNullable();
    table.text("telefone");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("register");
