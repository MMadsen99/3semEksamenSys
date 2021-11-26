const mongoose = require('mongoose');

const lagerSchema = {

  title: String,
  quantity: Number,
  Material: String,
  outside: Boolean,
  inside: Boolean

}



module.exports = mongoose.model('OnlineLager',lagerSchema);
