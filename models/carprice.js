const mongoose = require("mongoose");

const carprice = new mongoose.Schema({
  car_model_id: {
    type: String,
    required: true,
  },
  car_model_name: {
    type: String,
    required: true,
  },
  drive_period: {
    type: Number,
    required: true,
  },
  kilometers: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
  },
  from_date: {
    type: String,
  },
  to_date: {
    type: String,
  },
  total_price: {
    type: String,
  },
  status: {
    type: String,
    enum:["Active","Inactive"],
    default:"Active"
  },
});

module.exports = mongoose.model("Carprice", carprice);
