const wishlistModel = require("./../../db/models/wishlist");


const createNewWishList = (req, res) => {
  const { product, users } = req.body;

  const newWishList = new wishlistModel({
    product,
    users,
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

module.exports = {
    createNewWishList,
};
