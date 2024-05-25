/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const allpost = async (req, res) => {
  const post = await prisma.posts.findMany();
  res.status(200).json(post);
};

const addpost = async (req, res) => {
  const { username, userProfile, posttime, desc, postimg, like, comment } =
    req.body;
  console.log(req.body);
    const post = await prisma.posts.create({
      data: {
        username,
        userProfile,
        posttime: new Date().toISOString(),
        desc,
        postimg,
        like,
        comment,
      },
    });

    res.status(200).json(post);
};
module.exports = { allpost, addpost };
