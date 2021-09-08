const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cartModel = new mongoose.Schema({
    purchase: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
    Date: { type: Date, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Cart", cartModel);