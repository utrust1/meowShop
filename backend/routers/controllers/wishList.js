const wishlistModel = require("./../../db/models/wishlist");


const createNewWishList = (req, res) => {
    const { product } = req.body;
    let user = req.token.userId
    product =JSON.parse(product)
    const newWishList = new wishlistModel({
        product,
        user,
    });

    newWishList
        .save()
        .then((result) => {
            res.status(201).json({
                success: true,
                message: `Success Added Wishlist`,
                result: result,
            });
        })
        .catch((error) => {
            console.log(error.response);
            res.status(404).json({
                success: false,
                message: `Error happened while creating a new Wishlist, please try again`,
            });
        });
};

const getAllWishlist = (req, res) => {
    const id = req.token.userId
    .findOne({user:id}).populate('purchase')
       .then((result) => { })
   };

module.exports = {
    createNewWishList,
};