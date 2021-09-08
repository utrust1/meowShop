const mongoose = require('mongoose');

const cartModel = new mongoose.Schema({
    purchase: [{ type: mongoose.Schema.Types.ObjectId, ref: "product", required: true }],
    Date: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
module.exports = mongoose.model("Cart", cartModel);