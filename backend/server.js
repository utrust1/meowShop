const express = require('express');
const cors = require('cors');

const db = require('./db/db');
require("dotenv").config();

const app = express();
app.use(express.json());


//routers

const usersRouter = require("./routers/routes/user")
const productRouter = require("./routers/routes/products");


//built-in middleware

//third-party middleware

app.use(cors());

//app routers
app.use("/users", usersRouter)
app.use("/products", productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server On ${PORT}`);
});