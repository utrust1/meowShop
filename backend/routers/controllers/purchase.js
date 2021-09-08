const purchaseModel = require('../../db/models/purchase');

const createNewPurchase = (req, res) => {
    const { address, city, phoneNumber, country } = req.body;

    const newPurchase = new purchaseModel({
        address,
        city,
        phoneNumber,
        country,
    });

    newPurchase
        .save()
        .then((result) => {

            const successAdded = {
                success: true,
                message: "new Purchase added",
                result: result
            }
            res.status(201);
            res.json(successAdded);
        })
        .catch((err) => {
            console.error(err.response);
            const errorAdded = {
                success: false,
                message: "server error",
                error: err
            }
            res.status(404);
            res.json(errorAdded);
        });
};

module.exports = { createNewPurchase };