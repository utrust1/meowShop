const express = require("express");
const { createNewProduct, getAllProduct , getProductById, getProductByPrice, updateProductById, deleteProductById, getProductByCategory,search } = require("../controllers/product")
const productRouter = express.Router();
productRouter.post("/", createNewProduct);
productRouter.get("/", getAllProduct )
productRouter.get("/byprice", getProductByPrice)
productRouter.get("/:id", getProductById)
productRouter.put("/:id", updateProductById)
productRouter.delete("/:id", deleteProductById)
productRouter.get("/cat/:category", getProductByCategory)
productRouter.post("/search", search)



module.exports = productRouter;