const Carprice = require("../models/carprice");

//insert carprices
exports.new_carprice = function (req, res) {
  try {
    const carprice = new Carprice({
      car_model_id: 21521,
      car_model_name: AUDI,
      drive_period: req.body.drive_period,
      kilometers: req.body.kilometers,
      price: req.body.price,
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

//getall carprice
exports.getall_carprice = async function (req, res) {
  try {
    const data = await Carprice.find({});
    if (data) {
      res
        .status(200)
        .send({ success: true, data: data, message: "successfull" });
    } else {
      res
        .status(400)
        .send({ success: false, message: "some error" });
    }
  } catch (err) {
    res
      .status(400)
      .send({ success: false, message: "some thing went wrong" });
  }
};

//getById carprice
exports.getByid_carprice = async function (req, res) {
  try {
    const data = await Carprice.findOne({ _id: req.params.id });
    if (data) {
      res
        .status(200)
        .send({ success: true, data: data, message: "successfull," });
    } else {
      res
        .status(400)
        .send({ success: false, message: "some error" });
    }
  } catch (err) {
    res
      .status(400)
      .send({ success: false, message: "some thing went wrong" });
  }
};

//update carprice
exports.edit_carprice = async function (req, res) {
  try {
    const data = await Carprice.findOneAndUpdate(
      { _id: req.params.id },
      {
        car_model_id: req.body.car_model_id,
        car_model_name: req.body.car_model_name,
        drive_period: req.body.drive_period,
        kilometers: req.body.kilometers,
        price: req.body.price,
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

//delete carprice
exports.delete_carprice = async function (req, res) {
  try {
    const data = await Carprice.findOneAndDelete({ _id: req.params.id });
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

//active carprice
exports.active_cars = async function (req, res) {
  try {
    const data = await Carprice.find({ status: "Active" });
    if (data) {
      res
        .status(200)
        .send({ success: true, data: data, message: "successfull," });
    } else {
      res
        .status(400)
        .send({ success: false, message: "some error" });
    }
  } catch (err) {
    res
      .status(400)
      .send({ success: false, message: "some thing went wrong" });
  }
};
