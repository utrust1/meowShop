const express = require("express");
const {
    createNewCategory,
    deleteCategoryById,
    updateCategoryById,
    getallCategory
} = require("../controllers/category")
const cartegoryRouter = express.Router();

cartegoryRouter.post("/", createNewCategory);
cartegoryRouter.delete("/:id", deleteCategoryById);
cartegoryRouter.put("/:id", updateCategoryById);
cartegoryRouter.get("/", getallCategory);




module.exports = cartegoryRouter;