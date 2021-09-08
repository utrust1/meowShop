const wishlistModel = require("./../../db/models/wishlist");


const createNewWishList = (req, res) => {
  const { product, users } = req.body;

  const newWishList = new wishlistModel({
    product,
    users,
  });

 
};

module.exports = {
    createNewWishList,
};
