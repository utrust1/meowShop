const express = require("express");
const { createNewUser } = require("../controllers/user")

const wishListRouter = express.Router();

wishListRouter.post("/", createNewUser);

module.exports = wishListRouter;