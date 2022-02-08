const { getAllFriends, postOneFriend } = require("../repo/friends");

async function getFriends(ctx) {
  ctx.body = await getAllFriends();
}

async function postFriend(ctx) {
  console.log(ctx.request.body);
  ctx.body = await postOneFriend(ctx.request.body);
}

module.exports = { getFriends, postFriend };
