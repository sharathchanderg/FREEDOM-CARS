const mongoose = require("mongoose");

const feature = new mongoose.Schema({
  feature_name: {
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

module.exports = mongoose.model("Feature", feature);
