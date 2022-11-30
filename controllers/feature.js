const Feature = require("../models/feature");

exports.new_feature = async function(req, res){
  try {
    let logdate = new Date().toISOString() 
    const features =  new Feature({
        feature_name: req.body.feature_name,
        date: logdate,
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

exports.edit_feature = async function(req, res){
  try {
    
    const data = await Feature.findOneAndUpdate(
      { _id: req.params.id },
      {
        feature_name: req.body.feature_name,
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

exports.delete_feature = async function(req, res) {
  try {
    const data = await Feature.findOneAndDelete({ _id: req.params.id });
    if (data) {
      res.status(200).send({ success: true, message: "successfully deleted" });
    } else {
      res.status(404).send({ success: false, message: "something went wrong" });
    }
  } catch (err) {
    res.status(404).send({ success: false, message: err });
  }
};

exports.getallCarfeatures = async function (req, res) {
  try {
    const featureFound = await Feature.find({});
    if (featureFound) {
      res
        .status(200)
        .send({ success: true, message: "successfull", response: featureFound });
    } else {
      res
        .status(400)
        .send({ success: false, message: "error" });
    }
  } catch (err) {
    res
      .status(400)
      .send({ success: false, message: "some thing went wrong" });
  }
};