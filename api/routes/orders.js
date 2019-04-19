const express = require('express')
const routes = express.Router();

routes.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Orders List"
    });
});

routes.post('/',(req,res,next) =>{
    const order = {
        name: req.body.name,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message: "Order posted",
        order: order
    });
});

routes.delete('/:orderId',(req, res, next) =>{
    res.status(200).json({
        message: "Order deleted"
    });
});


module.exports = routes;