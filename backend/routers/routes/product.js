const express = require("express");
const { createNewProduct, getProductById, getProductByPrice } = require("../controllers/product")
const productRouter = express.Router();
productRouter.post("/", createNewProduct);
productRouter.get("/:id", getProductById)
productRouter.get("/byprice/byprice", getProductByPrice)

module.exports = productRouter;