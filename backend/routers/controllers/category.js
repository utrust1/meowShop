const categoryModel = require("./../../db/models/category");


const createNewCategory = (req, res) => {
    const { title, description, img } = req.body;

    const newCategory = new categoryModel({
        title,
        description,
        img,
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
const updateCategoryById = (req, res) => {
    id = req.params.id;
    const { title, description } = req.body;
    categoryModel.findOneAndUpdate({ _id: id }, { title, description }).then((result) => {
        const successUpdated = {
            success: true,
            message: `Success updated`,
            output: result
        }
        res.status(200);
        res.json(successUpdated);

    }).catch((err) => {
        const filedUpdated = {
            success: false,
            message: `not found id ==> ${id} for this category`
        }
        res.status(500);
        res.json(filedUpdated);
    })
}
const getallCategory = (req, res) => {

    const { page = 1, limit = 4 } = req.query
    categoryModel.find({}).limit(limit * 1).skip((page - 1) * limit).then((result) => {
        res.json({
            success: true,
            message: `All Category found `,
            result: result
        });
        res.status(200);
    }).catch((err) => {
        res.status(500);
        res.json({
            success: false,
            message: `Server Error`
        });
    })
}
module.exports = {
    createNewCategory,
    deleteCategoryById,
    updateCategoryById,
    getallCategory
};