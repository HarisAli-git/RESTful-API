const e = require('express');
const express = require('express');
const app = express.Router();

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET request Orders !",
    });
});

app.post('/', (req, res, next) => {
    res.status(200).json({
        message: "POST request Orders!",
    });
});

app.delete('/:oid', (req, res, next) => {
    res.status(200).json({
        message: "DEL request Orders!",
    });
});


app.get('/:oid', (req, res, next) => {
    const id = req.params.oid;
    if (id === 'sp')
    {
    res.status(200).json({
        message: "You passed a sp order id",
        id: id
    });
    }
    else{
        res.status(200).json({
            message: "You didnt passed an id",
        });
    }
});

module.exports = app;