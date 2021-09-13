const express = require("express");
const { CreateNewCart, getAllCart } = require("../controllers/cart")
const {authentication} = require("./../middlewares/authentication")


const cartRouter = express.Router();

cartRouter.post("/", authentication,CreateNewCart);
cartRouter.get("/", authentication,getAllCart)

module.exports = cartRouter;