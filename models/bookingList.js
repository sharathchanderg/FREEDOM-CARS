const mongoose = require("mongoose");

const bookings = new mongoose.Schema({
  booking_id: {
    type: String,
    required: true,
    index: { unique: true },
  },
  customer_name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  car_type: {
    type: String,
  },
  car_brand: {
    type: String,
  },
  car_model: {
    type: String,
  },
  from_date: {
    type: String,
  },
  to_date: {
    type: String,
  },
  price: {
    type: Number,
  },
  coupon_code: {
    type: String,
  },
  total_price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Bookings", bookings);
