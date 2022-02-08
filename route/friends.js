const { getFriends, postFriend } = require("../controller/friends.js");
const router = new (require("koa-router"))();

router.get("/friends", getFriends);
router.post("/friends", postFriend);

module.exports = router;
