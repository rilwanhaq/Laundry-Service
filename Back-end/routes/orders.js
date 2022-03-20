const express = require('express');
const bodyParser = require('body-parser');
const Order = require('..//models//orders');
const router = express.Router();

router.use(bodyParser());

// Get all orders
router.get('/orders', async (req, res) => {
    try{
        const orders = await Order.find({user: req.user});
        res.status(200).json({
            status: 'success',
            orders
        });
    }catch(err){
        return res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
})


//Cancel order
router.put('/orders/:id', async (req, res) => {
    try{
        const order = await Order.updateOne({_id: req.params.id, user: req.user},{status: 'cancelled'})
        return res.status(200).json({
            status: 'success',
            order
        });
    }catch(err){
        return res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
});





module.exports = router;