const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  type: String,
  availability: String,
  model: String,
  name: String,
  price: String,
  description: String,
  images: [],
});

module.exports = mongoose.model("product", productSchema);
