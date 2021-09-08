const express = require("express");
const { createNewProduct, getProductById } = require("../controllers/product")
const productRouter = express.Router();
productRouter.post("/", createNewProduct);
productRouter.get("/:id", getProductById)
module.exports = productRouter;