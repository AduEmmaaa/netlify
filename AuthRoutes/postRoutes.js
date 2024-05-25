/* eslint-disable no-undef */
const postRouter = require("express").Router();
const { allpost,addpost } = require("../AuthController/postController");

postRouter.get("/allpost", allpost);
postRouter.post("/addpost", addpost);

module.exports = postRouter;
