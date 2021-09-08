const mongoose = require('mongoose');
const productModel = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    newprice: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }
});

module.exports = mongoose.model("Product", productModel);