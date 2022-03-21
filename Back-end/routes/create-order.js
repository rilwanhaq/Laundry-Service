const express = require('express');
const bodyParser = require('body-parser');
const Order = require('..//models//orders');
const router = express.Router();

router.use(bodyParser());
router.get("/orders",async(req,res)=>{
    const orders = await Order.find()
    return res.json({
        status:"fetched successfully",
        orders
    })
})
router.post("/orders", async (req, res) => {
    try{
    const order = await Order.create({ 
        order_id:Date.now(),
        user_data: req.user,
        status : req.body.status,
        order_details : req.body.order_details,
    })
    return res.status(200).json({
        status: "Order is created", 
        data : order
    })
    }   catch(e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
    })
module.exports=router;