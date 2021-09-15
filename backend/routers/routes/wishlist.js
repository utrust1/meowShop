const express = require("express");
const { createNewWishList , getAllWishlist,deleteWishlistById} = require("../controllers/wishList")
const {authentication} = require("./../middlewares/authentication")

const wishListRouter = express.Router();

wishListRouter.post("/", authentication , createNewWishList);
wishListRouter.get("/",  authentication , getAllWishlist)
wishListRouter.delete("/:id" , deleteWishlistById)
module.exports = wishListRouter;