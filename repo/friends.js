const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "pass",
    database: "postgres",
  },
});

function getAllFriends() {
  return knex.select("*").from("friends");
}

function postOneFriend(data) {
  return knex("friends").insert({
    first_name: data.first_name,
    last_name: data.last_name,
    nickname: data.nickname,
  });
}

module.exports = { getAllFriends, postOneFriend };
