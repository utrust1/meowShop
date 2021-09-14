const express = require("express");
const { createNewWishList , getAllWishlist} = require("../controllers/wishList")
const {authentication} = require("./../middlewares/authentication")

const wishListRouter = express.Router();

wishListRouter.post("/", authentication ,createNewWishList);
wishListRouter.get("/",  authentication,  getAllWishlist)
module.exports = wishListRouter;