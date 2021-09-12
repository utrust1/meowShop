const express = require("express");
const { login } = require("../../controllers/auth/login");
// const {authentication} = require("./../../middlewares/authentication")

const loginRouter = express.Router();

loginRouter.post("/", login );

module.exports = loginRouter;
