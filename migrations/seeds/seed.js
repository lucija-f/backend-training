exports.seed = function (knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("friends").insert([
    { first_name: "Petar", last_name: "Perić", nickname: "pero" },
    { first_name: "Marko", last_name: "Marić", nickname: "" },
    { first_name: "Ivo", last_name: "Ivić", nickname: "Ivo" },
  ]);
};
