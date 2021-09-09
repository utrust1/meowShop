const express = require("express");
const { createNewProduct, getAllProduct, getProductById, getProductByPrice, updateProductById, deleteProductById, getProductByCategory } = require("../controllers/product")
const productRouter = express.Router();
productRouter.post("/", createNewProduct);
productRouter.get("/", getAllProduct)
productRouter.get("/byprice", getProductByPrice)
productRouter.get("/:id", getProductById)
productRouter.put("/:id", updateProductById)
productRouter.delete("/:id", deleteProductById)
productRouter.get("/category/:category", getProductByCategory)

module.exports = productRouter;