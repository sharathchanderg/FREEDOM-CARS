const mongoose = require("mongoose")

const coupon = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    coupon_code:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    coupon_code_type:{
        type:String
    },
    amount:{
        type:String
    },
    from_date:{
        type:String
    },
    to_date:{
        type:String
    },
    status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    }
});

module.exports = mongoose.model("Coupon",coupon)