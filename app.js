const express = require('express');
const morgan = require('morgan');
const app = express();

const ProductRoutes = require('./api/routes/products')
const OrderRoutes = require('./api/routes/orders')

app.use(morgan('dev'));

app.use('/products', ProductRoutes);
app.use('/orders', OrderRoutes);


module.exports = app;