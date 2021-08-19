const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let inventorySchema = new Schema({
  product: {
    type: String
  },
  price: {
    type: String
  },
  quantity: {
    type: Number
  }
}, {
    collection: 'inventory'
  })

module.exports = mongoose.model('Inventory', inventorySchema)