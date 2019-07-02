const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: [{
      type: String,
      required: true
    }],
    price: [{
        value: {
            type: Number,
            required: true
        },
        installments: {
            type: Number,
            required: true
        },
        installmentValue: {
            type: Number,
            required: true
        }
    }],
  }, {
    timestamps: true,
  });
  
  module.exports = mongoose.model('Product', ProductSchema);