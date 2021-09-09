const express = require('express');
const cors = require('cors');

const db = require('./db/db');
require("dotenv").config();

const app = express();
app.use(express.json());


//routers

const usersRouter = require("./routers/routes/user")
const cartRouter = require('./routers/routes/cart')
const wishListRouter = require("./routers/routes/wishlist")
const productRouter = require("./routers/routes/product")
const cartegoryRouter = require("./routers/routes/category")
const loginRouter = require("./routers/routes/auth/login")
const purchaseRouter=require("./routers/routes/purchase")

//built-in middleware

//third-party middleware

app.use(cors());


//app routers
app.use("/users" , usersRouter)
app.use('/cart', cartRouter)
app.use("/wishlist" , wishListRouter)
app.use("/product" , productRouter )
app.use("/category" , cartegoryRouter)
app.use("/login", loginRouter)
app.use("/purchase" ,purchaseRouter )

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
