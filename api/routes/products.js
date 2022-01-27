const e = require('express');
const express = require('express');
const app = express.Router();

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET request !",
    });
});

app.post('/', (req, res, next) => {
    const p = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: "POST request !",
        proCreate: p
    });
});

app.get('/:pid', (req, res, next) => {
    const id = req.params.pid;
    if (id === 'sp')
    {
    res.status(200).json({
        message: "You passed a sp id",
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