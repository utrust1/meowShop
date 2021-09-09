const express = require("express");
const { CreateNewCart, getAllCart } = require("../controllers/cart")

const cartRouter = express.Router();

cartRouter.post("/", CreateNewCart);
cartRouter.get("/",getAllCart)

module.exports = cartRouter;