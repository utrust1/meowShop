const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const usersModel = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

usersModel.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, 7);
});

module.exports = mongoose.model("User", usersModel);
