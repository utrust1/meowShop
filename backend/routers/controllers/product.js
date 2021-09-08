const productModel = require("./../../db/models/product");

const createNewProduct = (req, res) => {
    const { title, description, newprice, oldPrice, quantity, category } = req.body;

    const newProduct = new productModel({
        title,
        description,
        newprice,
        oldPrice,
        quantity,
        category,
    });

    newProduct
        .save()
        .then((result) => {
            res.status(201).json({
                success: true,
                message: `Success Added product`,
                result: result,
            });
        })
        .catch((error) => {
            console.log(error.response);
            res.status(404).json({
                success: false,
                message: `Error happened while creating a new product, please try again`,
            });
        });
};

const getProductById = (req, res) => {
    id = req.params.id;
    productModel.find({ _id: id }).then((product) => {
        const findId = {
            success: true,
            message: `The Product have This id ===> ${id}`,
            result: product
        }
        res.status(200);
        res.json(findId);
    }).catch((error) => {
        const idNotFound = {
            success: false,
            message: `${id} is not found `
        }
        res.status(500);
        res.json(idNotFound);

    })
}
module.exports = {
    createNewProduct,
    getProductById
};