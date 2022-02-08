const Joi = require("joi");
const { getAllFriends, postOneFriend } = require("../repo/friends");

const schema = Joi.object({
  first_name: Joi.string().alphanum().min(3).max(30).required(),

  last_name: Joi.string().alphanum().min(3).max(30).required(),

  nickname: Joi.string().allow(null).allow("").max(30),
});

async function getFriends(ctx) {
  ctx.body = await getAllFriends();
}

async function postFriend(ctx) {
  console.log(ctx.request.body);
  const result = schema.validate(ctx.request.body);
  console.log(result);
  if (result.error) ctx.body = "Not valid data";
  else ctx.body = await postOneFriend(ctx.request.body);
}

module.exports = { getFriends, postFriend };
