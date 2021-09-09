const express = require("express");
const { login } = require("../routes/auth/login");

const loginRouter = express.Router();

loginRouter.post("/", login);

module.exports = loginRouter;
