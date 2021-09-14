const productModel = require("./../../db/models/product");

const createNewProduct = (req, res) => {
    const { title, description, newprice, oldPrice, quantity, img, category } =
    req.body;

    const newProduct = new productModel({
        title,
        description,
        newprice,
        oldPrice,
        quantity,
        img,
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

const getAllProduct = async(req, res) => {
    const { page = 1, limit = 10 } = req.query
    productModel
        .find({}).limit(limit * 1).skip((page - 1) * limit)
        .then((products) => {
            res.status(200);
            res.json({
                success: true,
                massage: ` All the products`,
                products: products,
            });
        })
        .catch((err) => {
            res.status(500);
            res.json({
                success: false,
                massage: ` Server Error `,
            });
        });
};

const getProductById = (req, res) => {
    id = req.params.id;
    productModel
        .find({ _id: id })
        .then((product) => {
            const findId = {
                success: true,
                message: `The Product have This id ===> ${id}`,
                result: product,
            };
            res.status(200);
            res.json(findId);
        })
        .catch((error) => {
            const idNotFound = {
                success: false,
                message: `${id} is not found `,
            };
            res.status(500);
            res.json(idNotFound);
        });
};

const getProductByPrice = (req, res) => {
    productModel
        .find({})
        .where("newprice")
        .gt(1220)
        .lt(2000)
        .exec()
        .then((result) => {
            console.log("sdfsdfsdf");
            const priceFound = {
                success: true,
                message: "all Prodact have the price ",
                result: result,
            };
            res.status(200);
            res.json(priceFound);
        })
        .catch((err) => {
            throw err;
        });
};

const updateProductById = (req, res) => {
    const _id = req.params.id;
    productModel
        .findByIdAndUpdate(_id, req.body, { new: true })
        .then((result) => {
            if (!result) {
                res
                    .status(404)
                    .json({ success: true, message: `The Product => ${_id} not found` });
            }
            res.status(202).json({
                success: true,
                message: ` Success Article updated`,
                article: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: `Server Error`,
            });
        });
};

const deleteProductById = (req, res) => {
    id = req.params.id;
    productModel.findByIdAndRemove({ _id: id }).then((deletebyId) => {
        const deleted = {
            success: true,
            message: "success Delete product"
        };
        res.status(200);
        res.json(deleted);
    }).catch((err) => {
        const filedDeleted = {
            success: false,
            message: `can't find id ===> ${id}`
        }
        res.status(500);
        res.json(filedDeleted);
    })
}

const getProductByCategory = (req, res) => {

    const category = req.params.category

    productModel.find({ category: category }).then((result) => {
        res.status(200).json({
            success: true,
            massage: " All The Products ",
            result: result
        })
    }).catch((error) => {
        console.log(error);
        res.status(404).json({
            success: false,
            massage: ` ${category} Not Found  `
        })
    })
}

const search = (req , res )=>{
    const {title , description} = req.query
    
    productModel.find({
        $or:[
            {
                title:{
                    $regex:title,
                    $options:"i"
                }
            },
            {
                description:{
                    $regex:description,
                    $options:"i"
                }
            }
        ]
    }).then((result)=>{
        if(!result){
            res.status(400).json('product not available')
        }
        res.status(200).json({success:true , messsage:"found",result:result })
    }).catch((err)=>{
        res.status(409).json({success:false , message:'server error'})
    })
}

module.exports = {
    createNewProduct,
    getProductById,
    getProductByPrice,
    updateProductById,
    deleteProductById,
    getProductByCategory,
    getAllProduct,
    search
};