const express = require("express");
const { createNewCategory,deleteCategoryById,
    updateCategoryById } = require("../controllers/category")
const cartegoryRouter = express.Router();

cartegoryRouter.post("/", createNewCategory);
cartegoryRouter.delete("/:id", deleteCategoryById);
cartegoryRouter.put("/:id", updateCategoryById);





module.exports = cartegoryRouter;
