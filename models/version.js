const mongoose = require("mongoose");

const version = new mongoose.Schema({
 brand_name: {
    type: String,
    required: true,
  },
  model_name: {
    type: String,
    required: true,
  },
  version: {
    type: String,
  },
  status: {
    type: String,
    enum:["active", "inactive"],
    default: "active"
  },
});
 
module.exports = mongoose.model("Version", version);