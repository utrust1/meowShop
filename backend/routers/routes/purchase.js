const express = require("express");
const { stripePayment } = require("./../controllers/purchase")
const purchaseRouter = express.Router();
purchaseRouter.post("/", stripePayment)
module.exports = purchaseRouter;