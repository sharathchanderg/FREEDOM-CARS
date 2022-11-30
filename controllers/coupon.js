const Coupon = require("../models/coupon");

exports.new_coupon = function (req, res) {
  try {
    const coupons = new Coupon({
      title: req.body.title,
      coupon_code: req.body.coupon_code,
      coupon_code_type: req.body.coupon_code_type,
      amount: req.body.amount,
      from_date: req.body.from_date,
      to_date: req.body.to_date,
      status: req.body.status,
    }).save(function (err, data) {
      if (data) {
        res.status(201).send({ success: true, message: data });
      } else {
        res.status(400).send({ success: false, message: err });
      }
    });
  } catch (err) {
    res.status(400).send({ success: false, message: err });
  }
};

exports.edit_coupon = async function (req, res) {
  try {
    const data = await Coupon.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        coupon_code: req.body.coupon_code,
        coupon_code_type: req.body.coupon_code_type,
        amount: req.body.amount,
        from_date: req.body.from_date,
        to_date: req.body.to_date,
        status: req.body.status,
      }
    );
    if (data) {
      res
        .status(200)
        .send({ success: true, message: "successfully updated,", data: data });
    } else {
      res
        .status(400)
        .send({ success: false, message: "not updated due to some error" });
    }
  } catch (err) {
    res
      .status(400)
      .send({ success: false, message: "not updated some thing went wrong" });
  }
};

exports.delete_coupon = async function (req, res) {
  try {
    const data = await Coupon.findOneAndDelete({ _id: req.params.id });
    if (data) {
      res.status(200).send({ success: true, message: "successfully deleted," });
    } else {
      res
        .status(400)
        .send({ success: false, message: "not deleted due to some error" });
    }
  } catch (err) {
    res
      .status(400)
      .send({ success: false, message: "not deleted some thing went wrong" });
  }
};

exports.getAllCoupons = async function (req, res) {
  try {
    const couponsFound = await Coupon.find({});
    if (couponsFound) {
      res.status(200).send({ success: true, message: "successfull", response:couponsFound });
    } else {
      res
        .status(400)
        .send({ success: false, message: "not found due to some error" });
    }
  } catch (err) {
    res
      .status(400)
      .send({ success: false, message: "not found some thing went wrong" });
  }
};
