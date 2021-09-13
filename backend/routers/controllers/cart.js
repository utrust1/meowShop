const cartModel = require('../../db/models/cart');

const CreateNewCart = (req, res) => {
    let { purchase, Date, user } = req.body;
    purchase =JSON.parse(purchase)
    console.log("mm",req.body);
    console.log("mmgg",purchase);
    const newCart = new cartModel({
        purchase,
        Date,
        user,
    });
    // try in it 
    newCart
        .save()
        .then((result) => {
            console.log("mmmm",result);
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
       .find({}).populate('purchase')
       .then((result) => {
         res.status(200);
         res.json({
           success: true,
           massage: ` All the carts`,
           products: result,
         });
       }).catch((err)=>{
        res.status(500).json({
          success: false,
          massage: ` Server Error `,
        });
       })
       
   };



module.exports = { CreateNewCart ,getAllCart};