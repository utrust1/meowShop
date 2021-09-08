const express = require("express");
const { createNewProduct } = require("../controllers/product")

const productRouter = express.Router();

productRouter.post("/", createNewProduct);

module.exports = productRouter;