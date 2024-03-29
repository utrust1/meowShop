const mongoose = require("mongoose");

const wishlistModel = new mongoose.Schema({
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Wishlist", wishlistModel);