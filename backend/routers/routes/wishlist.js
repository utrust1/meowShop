const express = require("express");
const { createNewWishList } = require("../controllers/wishList")
const {authentication} = require("./../middlewares/authentication")

const wishListRouter = express.Router();

wishListRouter.post("/", createNewWishList);

module.exports = wishListRouter;