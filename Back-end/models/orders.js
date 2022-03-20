const mongoose = require('mongoose');
const { Schema } = mongoose

const productSchema = new Schema({
    productType: { type: String },
    quantity: { type: Number, default: 0 },
    wash: { type: Boolean, default: false },
    ironing: { type: Boolean, default: false },
    Folding: { type: Boolean, default: false },
    Packing: { type: Boolean, default: false },
    status: {type: String}
  })

const Order = mongoose.model('Order',orderSchema)

module.exports = Order;