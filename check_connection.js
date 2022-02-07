const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "pass",
  port: 5432,
});
client.connect();
client.query("select * from friends", (err, res) => {
  console.log(err, res);
  client.end();
});
