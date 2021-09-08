const express = require("express");
const { CreateNewCart } = require("../controllers/cart")

const cartRouter = express.Router();

cartRouter.post("/", CreateNewCart);

module.exports = cartRouter;