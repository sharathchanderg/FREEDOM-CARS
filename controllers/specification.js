const Specification = require("../models/specification");

exports.new_specification = async function(req, res){
  try {
    const specifications = new Specification({
        specification_name: req.body.specification_name,
        date: req.body.date,
        status: req.body.status
    }).save((err, data) => {
      if (err) {
        res.status(400).json({ success: false, message: err });
      } else {
        res
          .status(201)
          .json({ success: true, message: "data inserted successfully" });
      }
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

exports.edit_specification = async function(req, res){
  try {
    let logdate = new Date().toISOString
    const data = await Specification.findOneAndUpdate(
      { _id: req.params.id },
      {
        specification_name: req.body.specification_name,
        date: logdate,
        status: req.body.status
      }
    );
    if (data) {
      res.status(200).send({ success: true, updated: data });
    } else {
      res.status(404).send("some thing went wrong to update profile");
    }
  } catch (error) {
    res.status(400).send({ success: false, message: error });
  }
};

exports.delete_specification = async function(req, res) {
  try {
    const data = await Specification.findOneAndDelete({ _id: req.params.id });
    if (data) {
      res.status(200).send({ success: true, message: "successfully deleted" });
    } else {
      res.status(404).send({ success: false, message: "something went wrong" });
    }
  } catch (err) {
    res.status(404).send({ success: false, message: err });
  }
};

exports.getAllSpecification = async function (req, res) {
  try {
    const specificationFound = await Specification.find({});
    if (specificationFound) {
      res.status(200).send({ success: true, message: "successfull", response:specificationFound });
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
