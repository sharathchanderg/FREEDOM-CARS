const Carmodel = require("../models/carmodel");
const multer = require("multer");

// middleware for uploading the bannerImg
const bannerImgStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploadPhotos");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    }
  });
  const bannerImgMaxSize = 10 * 1024 * 1024;
  exports.upload_bannerImages = multer({
    storage: bannerImgStorage,
    fileFilter: (req, file, cb) => {
      if (file.originalname.match(/\.(png|PNG|jpg|jpeg|JPG)$/)) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("This file extension is not allowed"));
      }
    },
    limits: { fileSize: bannerImgMaxSize }
  });

//insert carmodel
exports.addCarmodel = function (req, res) {
  try {
    const carmodel = new Carmodel({
        car_type: req.body.car_type,
        brand: req.body.brand,
        model_name: req.body.model_name,
        no_of_seats: req.body.no_of_seats,
        image: req.file.path, 
        status: req.body.status
    });
    carmodel.save(function (err, data) {
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

//getall carmodel
exports.getallCarModels = async function (req, res) {
  try {
    const allCarmodels = await Carmodel.find({});
    if (allCarmodels) {
      res
        .status(200)
        .send({ success: true, response: allCarmodels, message: "successfull" });
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

//update carmodel
exports.updateCarModel = async function (req, res) {
  try {
    const CarModelUpdated = await Carmodel.findOneAndUpdate(
      { _id: req.params.id },
      {
        car_type: req.body.car_type,
        brand: req.body.brand,
        model_name: req.body.model_name,
        no_of_seats: req.body.no_of_seats,
        image: req.body.image,
        status: req.body.status
      }
    );
    if (CarModelUpdated) {
      res
        .status(200)
        .send({ success: true, response:CarModelUpdated, message: "successfully updated," });
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

//delete carmodel
exports.deleteCarModel = async function (req, res) {
  try {
    const CarModelDeleted = await Carmodel.findOneAndDelete({ _id: req.params.id });
    if (CarModelDeleted) {
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





// //active carprice
// exports.active_cars = async function (req, res) {
//   try {
//     const data = await Carprice.find({ status: "Active" });
//     if (data) {
//       res
//         .status(200)
//         .send({ success: true, data: data, message: "successfull," });
//     } else {
//       res
//         .status(400)
//         .send({ success: false, message: "some error" });
//     }
//   } catch (err) {
//     res
//       .status(400)
//       .send({ success: false, message: "some thing went wrong" });
//   }
// };


// //getById carprice
// exports.getByid_carprice = async function (req, res) {
//     try {
//       const data = await Carprice.findOne({ _id: req.params.id });
//       if (data) {
//         res
//           .status(200)
//           .send({ success: true, data: data, message: "successfull," });
//       } else {
//         res
//           .status(400)
//           .send({ success: false, message: "some error" });
//       }
//     } catch (err) {
//       res
//         .status(400)
//         .send({ success: false, message: "some thing went wrong" });
//     }
//   };