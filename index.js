"use strict";

const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  ctx.body = "Hello World";
});

app.listen(3000);
