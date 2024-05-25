/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const router = require("./AuthRoutes/AuthRoute");
const postRouter = require("./AuthRoutes/postRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/Auth", router);
app.use("/api/Post", postRouter);

const port = process.env.PORT || 2000;
app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
