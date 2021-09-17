const express = require("express");
const {
    createNewCategory,
    deleteCategoryById,
    updateCategoryById,
    getallCategory,
    getallCategorys
} = require("../controllers/category")
const cartegoryRouter = express.Router();

cartegoryRouter.post("/", createNewCategory);
cartegoryRouter.delete("/:id", deleteCategoryById);
cartegoryRouter.put("/:id", updateCategoryById);
cartegoryRouter.get("/", getallCategory);
cartegoryRouter.get('/cat', getallCategorys);




module.exports = cartegoryRouter;