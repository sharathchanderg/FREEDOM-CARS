const mongoose = require("mongoose");

const carmodel = new mongoose.Schema({
  car_type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model_name: {
    type: String,
    required: true,
  },
  no_of_seats: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  status:{
    type: String,
    enum:["Active","Inactive"],
    default:"Active"
  }
});

module.exports = mongoose.model("Carmodel", carmodel);
