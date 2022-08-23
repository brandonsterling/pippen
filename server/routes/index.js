const express = require("express");
const rootRouter = express.Router();

const resume = require("./resume");
const user = require("./user");

rootRouter.use("/auth", user);
rootRouter.use("/resume", resume);

module.exports = rootRouter;
