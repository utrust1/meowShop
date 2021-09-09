const express = require("express");
const { createNewProduct, getProductById, getProductByPrice , deleteProductById} = require("../controllers/product")
const productRouter = express.Router();
productRouter.post("/", createNewProduct);
productRouter.get("/byprice", getProductByPrice)
productRouter.get("/:id", getProductById)
productRouter.delete("/ids", )


module.exports = productRouter;