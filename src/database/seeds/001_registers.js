/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("register").del();
  await knex("register").insert([
    {
      name: "Filipe Rodrigo",
      email: "filipe@gmail.com",
      telefone: "77982654185",
    },
  ]);
};
