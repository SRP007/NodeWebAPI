const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/productSchema');

router.get('/', (req, res, next) => {
    const products = res.product; 
    res.status(200).json({
        message: 'Response from GET request to /products',
        products: products
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product
    .save()
    .then(result => {
        console.log(result)
    })
    .catch( err=> console.log(err));  
    res.status(201).json({
        message: 'Response from POST request to /products',
        productAdded: product
    })
})


router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'Recieved id with service',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID but not special'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message:'Product is updated'
    })
})

router.delete('/:productId', (req, res, next)=>{
    res.status(200).json({
        message:'Product is deleted'
    })
})

module.exports = router;