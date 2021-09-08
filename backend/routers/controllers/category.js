const categoryModel = require("./../../db/models/category");


const createNewCategory = (req, res) => {
  const { title, description } = req.body;

  const newCategory = new categoryModel({
    title,
    description,
  });

  newCategory
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Success Added category`,
        result: result,
      });
    })
    .catch((error) => {
     console.log(error.response);
      res.status(404).json({
        success: false,
        message: `Error happened while creating a new category , please try again`,
      });
    });
};

module.exports = {
  createNewCategory,
};
