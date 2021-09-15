const express = require("express");
const { CreateNewCart, getAllCart,deleteCartById } = require("../controllers/cart")
const {authentication} = require("./../middlewares/authentication")


const cartRouter = express.Router();

cartRouter.post("/", authentication,CreateNewCart);
cartRouter.get("/", authentication,getAllCart)
cartRouter.delete("/:id",deleteCartById)

module.exports = cartRouter;