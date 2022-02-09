const friends = require("./friends");

const data = {
  first_name: "Petar",
  last_name: "Peric",
  nickname: "pero",
};

jest.mock("../repo/friends", () => ({
  getAllFriends: jest.fn().mockReturnValueOnce(data),
  postOneFriend: jest.fn().mockImplementation((data) => data),
}));

test("returns body with all friends", async () => {
  let ctx = {};

  await friends.getFriends(ctx);
  expect(ctx.body).toBe(data);
});

test("adds one friend", async () => {
  let ctx = {};
  ctx.request = { body: data };
  await friends.postFriend(ctx);
  expect(ctx.body).toBe(data);
});
