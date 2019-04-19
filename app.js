const express = require('express');
const app = express();
const productRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//morgan and body-parser are a middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', productRoute);
app.use('/orders', ordersRoute);

mongoose.connect('mongodb+srv://shashank:'+ process.env.MONGO_ATLAS_PW +'@nodeapi-bpxch.mongodb.net/test?retryWrites=true', 
{ 
    useNewUrlParser: true 
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

module.exports = app;
