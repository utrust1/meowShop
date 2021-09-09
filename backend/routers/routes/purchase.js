const express = require("express");
const {createNewPurchase} = require("./../controllers/purchase")
const purchaseRouter = express.Router();

purchaseRouter.post("/", createNewPurchase)


module.exports = purchaseRouter;