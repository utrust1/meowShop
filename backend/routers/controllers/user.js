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
            if (err.keyPattern) {
                return res.status(409).json({
                    success: false,
                    message: `The email already exists`,
                });
            }
            res.status(500).json({
                success: false,
                message: `Server Error`,
                err: err,
            });
        });
};



module.exports = { createNewUser };