const Bookings = require("../models/bookingList");

exports.new_booking = async (req, res) => {
  let sumId;
  let cId;
  const count = await Bookings.find().countDocuments();
  if (count > 0) {
    const data = await Bookings.findOne().sort({ _id: -1 });
    let x = data.user_id;
    let a = parseInt(x);
    sumId = a != undefined ? a + 000001 : 000001;
    cId = String(sumId).padStart(6, 0);
    console.log(cId);
  } else {
    sumId = 000001;
    cId = String(sumId).padStart(6, 0);
    console.log(cId);
  }
  try {
    const booking = new Bookings({
      booking_id: sumId,
      customer_name: req.body.customer_name,
      phone: req.body.phone,
      email: req.body.email,
      car_type: req.body.car_type,
      car_brand: req.body.no_of_days,
      car_model: req.body.car_model,
      from_date: req.body.from_date,
      to_date: req.body.to_date,
      price: req.body.price,
      coupon_code: req.body.coupon_code,
      total_price: req.body.total_price,
    }).save((err, data) => {
      if (err) {
        res.status(400).json({ success: false, message: err });
      } else {
        res
          .status(200)
          .json({ success: true, message: "data inserted successfully",response:data });
      }
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

exports.edit_booking = async (req, res) => {
  try {
    const data = await Bookings.findOneAndUpdate(
      { _id: req.params.id },
      {
        customer_name: req.body.customer_name,
        phone: req.body.phone,
        email: req.body.email,
        car_type: req.body.car_type,
        car_brand: req.body.no_of_days,
        car_model: req.body.car_model,
        from_date: req.body.from_date,
        to_date: req.body.to_date,
        price: req.body.price,
        coupon_code: req.body.coupon_code,
        total_price: req.body.total_price,
      }
    );
    if (data) {
      res.status(200).send({ success: true, updated: data });
    } else {
      res.status(404).send({success:false, message:"Invalid booking"});
    }
  } catch (error) {
    res.status(400).send({ success: false, message: error });
  }
};

exports.delete_booking = async (req, res) => {
  try {
    const data = await Bookings.findOneAndDelete({ _id: req.params.id });
    if (data) {
      res.status(200).send({ success: true, message: "successfully deleted" });
    } else {
      res
        .status(400)
        .send({ success: false, message: "invalid booking" });
    }
  } catch (err) {
    res.status(400).send({ success: false, message: err });
  }
};

exports.getAllBookings = async function (req, res) {
  try {
    const bookingsFound = await Bookings.find({});
    if (bookingsFound) {
      res.status(200).send({ success: true, message: "successfull", response:bookingsFound });
    } else {
      res
        .status(400)
        .send({ success: false, message: "invalid booking" });
    }
  } catch (err) {
    res
      .status(400)
      .send({ success: false, message: "not found some thing went wrong" });
  }
};
