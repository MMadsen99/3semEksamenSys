const mongoose = require('mongoose');
const { path } = require('../app');
const { patch } = require('../routes');

const lagerSchema =  new mongoose.Schema( {

  title: String,
  quantity: Number,
  material: String,
  klima: String,
  category: String
  
});

module.exports = mongoose.model('onlineLager',lagerSchema);
