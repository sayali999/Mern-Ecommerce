//dotenv
require("dotenv").config();
const cors = require("cors");
const express = require('express');
const app = express();
const authRoute = require("./router/auth-router");
const adminRoute = require('./router/admin-router');
const contactRoute = require("./router/contact-router");
const categoryRoute = require("./router/category-router");
const subCategoryRoute = require("./router/sub-category-router")
const productRoute = require('./router/product-router');
const orderRoute = require('./router/order-router');
const userRoute = require('./router/user-router/user-router');


//databse connection
const coonectDb = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");

//handle cors policy
const corsOption = {
    origin: ["http://localhost:3000","http://localhost:3001"],
    methods: "GET, POST , PUT, DELETE, PATCH, HEAD",
    credentials: true
};
app.use(cors(corsOption));

app.use(express.json());

//routes
app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);
app.use('/api/admin', adminRoute);
app.use('/api/auth', userRoute);
app.use('/api/form', categoryRoute);
app.use('/api/form', subCategoryRoute);
app.use('/api/form', productRoute);
app.use('/api/form', orderRoute);


app.use(errorMiddleware);

const PORT = 5000;

coonectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running : ${PORT}`);
    });
})


