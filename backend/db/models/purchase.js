const mongoose = require('mongoose');

// its done 
const purchaseModel = new mongoose.Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    country: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("purchase", purchaseModel);