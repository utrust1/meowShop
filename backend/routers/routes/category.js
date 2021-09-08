const express = require("express");
const { createNewCategory } = require("../controllers/category")
const productRouter = express.Router();
productRouter.post("/", createNewCategory);
module.exports = productRouter;
