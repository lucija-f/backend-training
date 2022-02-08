"use strict";

const Koa = require("koa");
const router = require("koa-router");
const parser = require("koa-body");
const app = new Koa();

const _ = router(); //Instantiate the router
_.use(require("./route/friends.js").routes());

app.use(parser());
app.use(_.routes());
app.listen(3000);
