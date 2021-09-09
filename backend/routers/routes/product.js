const express = require("express");
<<<<<<< HEAD
const { createNewProduct, getProductById, getProductByPrice, updateProductById, deleteProductById } = require("../controllers/product")
=======
const { createNewProduct, getProductById, getProductByPrice , updateProductById ,deleteProductById ,getProductByCategory} = require("../controllers/product")
>>>>>>> 24ee7822b237efbfc8cd6c975b0c7a1d9cc090d5
const productRouter = express.Router();
productRouter.post("/", createNewProduct);
productRouter.get("/byprice", getProductByPrice)
productRouter.get("/:id", getProductById)
<<<<<<< HEAD
productRouter.put("/:id", updateProductById)
productRouter.delete(":/id", deleteProductById)
=======
productRouter.put("/:id", updateProductById )
productRouter.delete("/:id", deleteProductById )
productRouter.get("/:category",getProductByCategory )


>>>>>>> 24ee7822b237efbfc8cd6c975b0c7a1d9cc090d5

module.exports = productRouter;