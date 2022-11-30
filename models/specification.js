const mongoose = require("mongoose");

const specification = new mongoose.Schema({
  specification_name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

module.exports = mongoose.model("Specification", specification);
