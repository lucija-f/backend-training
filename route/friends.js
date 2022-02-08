const getFriends = require("./repo/friends.js");
console.log(getFriends);
const router = new (require("koa-router"))();

router.get("/friends", getFriends);

// router.post("/friends", postFriend);

module.exports.router = router;
