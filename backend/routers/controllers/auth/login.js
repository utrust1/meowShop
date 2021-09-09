const usersModel = require("./../../../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
  const { email, password } = req.body;
  usersModel
    .findOne({ email })
    .populate("User")
    .exec()
    .then(async (result) => {
      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: `The email doesn't exist` });
      }
      try {
        const valid = await bcrypt.compare(password, result.password);
        if (!valid) {
          return res
            .status(403)
            .json({
              success: false,
              message: `The password you’ve entered is incorrect`,
            });
        }
        const payload = { userId: result._id, firstName: result.firstName };
        const options = { expiresIn: "7d" };
        const token = await jwt.sign(payload, process.env.SECRET, options);
        res
          .json(200)
          .json({
            success: true,
            message: `Email and Password are correct`,
            token: token,
          });
      } catch (error) {
        throw error;
      }
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = {login};
