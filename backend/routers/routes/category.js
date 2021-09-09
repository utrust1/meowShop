const express = require("express");
const { createNewCategory } = require("../controllers/category")
const cartegoryRouter = express.Router();
cartegoryRouter.post("/", createNewCategory);




module.exports = cartegoryRouter;
