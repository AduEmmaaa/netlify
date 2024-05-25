/* eslint-disable no-undef */

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const register = async (req, res) => {
  const { username, email, password, passwordAgain } = req.body;

  if (password != passwordAgain)
    return res.status(400).json({ error: "password does not match❌" });

  if (!username || !email || !password || !passwordAgain)
    return res.status(401).json({ error: " Empty fields❌" });

  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (user) return res.status(400).json({ error: " email already exist❌ " });

  try {
    const newuser = await prisma.users.create({
      data: {
        username,
        email,
        password,
        passwordAgain,
      },
    });

    res.status(200).json({ message: "User Registerd✅" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Registration Faild❌" });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: " Empty fields❌" });
  try {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user)
      return res.status(400).json({ error: " Invalid email/password❌" });

    if (password != user.password)
      return res.status(400).json({ error: "Invalid email/password❌" });

    res.status(200).json({ message: "Successfull Login✅", user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Login Faild❌" });
  }
};
const logout = (req, res) => {};

module.exports = { register, login, logout };
