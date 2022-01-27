const express = require('express');
const morgan = require('morgan');
const app = express();
const ProductRoutes = require('./api/routes/products')
const OrderRoutes = require('./api/routes/orders');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://HarisDB:HarisDB@gurucluster.j8ef7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useMongoClient: true
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS')
    {
        res.header('Access-Control-Allow-Methods', '*');
        return res.status(200).json({});
    }
});

app.use('/products', ProductRoutes);
app.use('/orders', OrderRoutes);

app.use((req, res, next) => {
    const error = Error('Not Found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;