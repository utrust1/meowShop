const express = require("express");
const { createNewProduct, getProductById, getProductByPrice , updateProductById ,deleteProductById } = require("../controllers/product")
const productRouter = express.Router();
productRouter.post("/", createNewProduct);
productRouter.get("/byprice", getProductByPrice)
productRouter.get("/:id", getProductById)
productRouter.put("/:id", updateProductById )
productRouter.delete(":/id", deleteProductById )

module.exports = productRouter;