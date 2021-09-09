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

const deleteCategoryById = (req, res) => {
    id = req.params.id;
    categoryModel.findByIdAndRemove({ _id: id }).then((result) => {
        const successDeleted = {
            success: true,
            message: `Success delete category`,
            result: result
        }
        res.json(successDeleted);
    }).catch((err) => {
        const filedDeleted = {
            success: false,
            message: `Error not found id ==> ${id}`
        }
        res.json(filedDeleted);
    })

}

module.exports = {
    createNewCategory,
    deleteCategoryById
};