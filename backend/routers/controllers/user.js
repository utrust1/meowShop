const usersModel = require("../../db/models/user");

const createNewUser = (req, res) => {
  const { firstName, lastName, age, email, password } = req.body;

  const newUser = new usersModel({
    firstName,
    lastName,
    age,
    email,
    password,
  });
  newUser
    .save()
    .then((result) => {
      res
        .status(201)
        .json({ success: true, message: "Success user added", result: result });
    })
    .catch((err) => {
      res
        .status(201)
        .json({ success: false, message: "this email already exist" });
    });
};

module.exports = createNewUser;
