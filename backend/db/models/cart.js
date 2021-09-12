const mongoose = require('mongoose');

const cartModel = new mongoose.Schema({
    purchase: [{ type: mongoose.Schema.Types.ObjectId, ref: "product", required: true }],
    Date: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
});
module.exports = mongoose.model("Cart", cartModel);