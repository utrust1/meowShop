const cartModel = require('../../db/models/cart');

const CreateNewCart = (req, res) => {
    const { purchase, Date, user } = req.body;

    const newCart = new cartModel({
        purchase,
        Date,
        user,
    });
    newCart
        .save()
        .then((result) => {
            const successAdded = {
                success: true,
                message: "Success Added Cart",
                result: result
            }
            res.status(201);
            res.json(successAdded);
        })
        .catch((err) => {
            console.log(err.response);
            const errorAdded = {
                success: false,
                message: "server error",
                error: err
            }
            res.status(404);
            res.json(errorAdded);
        });
};

const getAllCart = (req, res) => {
    cartModel
       .find({})
       .then((result) => {
         res.status(200);
         res.json({
           success: true,
           massage: ` All the carts`,
           products: products,
         });
       }).catch((err)=>{
        res.status(500).json({
          success: false,
          massage: ` Server Error `,
        });
       })
       
   };



module.exports = { CreateNewCart ,getAllCart};