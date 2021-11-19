const purchaseModel = require('../../db/models/purchase');
const sgMail = require("@sendgrid/mail");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const stripePayment = async(req, res) => {
    const { amount, id, address, city, phoneNumber, country } = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "USD",
            description: "Fundraiser",
            payment_method: id,
            confirm: true,
        });
        console.log("payment", payment);
        if (payment.status == "succeeded") {
            let sgMailApiKey = "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";
            sgMail.setApiKey(sgMailApiKey);
            const msg = {
                to: "omarhushki94@gmail.com", // Change to your recipient
                from: "muyassarsider@gmail.com", // Change to your verified sender
                subject: "Sending with SendGrid is Fun",
                text: `Thank You For Shopping with us have a nice day`,
                html: `<strong><h1>This is a value for your bill: ${amount/100}Usd </h1></strong>`,
            };
            sgMail
                .send(msg)
                .then(() => {})
                .catch((error) => {});
            const newPurchase = new purchaseModel({
                address,
                city,
                phoneNumber,
                country,
            });
            newPurchase
                .save()
                .then((result) => {
                    console.log("result", result);
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
        }
    } catch (error) {
        res.json({
            message: "Payment failed",
            success: false,
        });
    }
};
module.exports = { stripePayment };
// module.exports = {postInformationSender}