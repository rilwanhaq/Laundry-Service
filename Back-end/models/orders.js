const mongoose = require('mongoose');
const { Schema } = mongoose

const orderSchema = new Schema({

  order_id:{type:String,required:true},
  user_data:{type: Schema.Types.ObjectId,reference:'User'},
  order_details:[
    {productType: { type: String },
    quantity: { type: Number, default: 0 },
    wash: { type: Boolean, default: false },
    ironing: { type: Boolean, default: false },
    Folding: { type: Boolean, default: false },
    Packing: { type: Boolean, default: false },
    price:{type:Number,default:"---"},}

  ],
  
    status: {type: String,default:"ready to pick"}
  })

const Order = mongoose.model('Order',orderSchema)

module.exports = Order;