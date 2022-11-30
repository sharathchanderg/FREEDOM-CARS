const Version = require("../models/version");

exports.new_version = async function(req, res){
  try {
    const version = new Version({
      brand_name: req.body.brand_name,
      model_name: req.body.model_name,
      version: req.body.version,
      status: req.body.status,
    }).save((err, data) => {
      if (err) {
        res.status(400).json({ success: false, message: err });
      }
      if (data) {
        res.status(201).json({ success: true, data: data });
      }
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

exports.edit_version = async function(req, res){
  try {
    const data = await Version.findOneAndUpdate(
      { _id: req.params.id },
      {
        brand_name: req.body.brand_name,
        model_name: req.body.model_name,
        version: req.body.version,
        status: req.body.status,
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

exports.delete_version = async function(req, res){
  try {
    const data = await Version.findOneAndDelete({ _id: req.params.id });
    if (data) {
      res.status(200).send({ success: true, message: "successfully deleted" });
    } else {
      res.status(404).send({ success: false, message: "something went wrong" });
    }
  } catch (err) {
    res.status(404).send({ success: false, message: err });
  }
};

exports.getAllVersion = async function (req, res) {
  try {
    const versionFound = await Version.find({});
    if (versionFound) {
      res.status(200).send({ success: true, message: "successfull", response:versionFound });
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
