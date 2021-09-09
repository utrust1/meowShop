const express = require("express");
const { createNewProduct, getProductById, getProductByPrice } = require("../controllers/product")
const productRouter = express.Router();
productRouter.post("/", createNewProduct);
productRouter.get("/byprice", getProductByPrice)
productRouter.get("/:id", getProductById)
productRouter.put("/:id", )

module.exports = productRouter;