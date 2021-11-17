const express = require("express");
const { login , loginGoogle} = require("../../controllers/auth/login");
// const {authentication} = require("./../../middlewares/authentication")
const loginRouter = express.Router();
loginRouter.post("/", login );
loginRouter.post("/google", loginGoogle);
module.exports = loginRouter;
