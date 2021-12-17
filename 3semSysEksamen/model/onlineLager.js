const mongoose = require('mongoose');

const lagerSchema =  new mongoose.Schema( {

  title: String,
  quantity: Number,
  material: String,
  klima: String,
  category: String,
  price: String,
  description: String
  
});

module.exports = mongoose.model('onlineLager',lagerSchema);
