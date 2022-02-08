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

async function getFriends(ctx) {
  ctx.body = await knex.select("*").from("friends");
}

async function postFriend(ctx) {
  console.log(ctx.request.body);
  ctx.body = await knex("friends").insert({
    first_name: ctx.request.body.first_name,
    last_name: ctx.request.body.last_name,
    nickname: ctx.request.body.nickname,
  });
}

module.exports = getFriends;
