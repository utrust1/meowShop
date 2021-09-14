const wishlistModel = require("./../../db/models/wishlist");


const createNewWishList = (req, res) => {
    console.log("meme");
    let  product = req.body;
    let user = req.token.userId
    console.log("pro", product );
    console.log("user", user );

    product =JSON.parse(product)
    console.log("pro 2 ", product );
    const newWishList = new wishlistModel({
        product,
        user,
    });
    console.log("new" , newWishList);
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
    .findOne({user:id}).populate('product')
       .then((result) => {
        res.status(200);
        res.json({
          success: true,
          massage: ` All the Wishlist`,
          products: result,
        }).catch((err)=>{
            res.status(500).json({
              success: false,
              massage: ` Server Error `,
            });
           })
        })
   };

module.exports = {
    createNewWishList,getAllWishlist
};