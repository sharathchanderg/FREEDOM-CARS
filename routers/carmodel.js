const express = require("express");
const router = express.Router();
const {upload_bannerImages} = require("../controllers/carmodel");
const carmodel= require("../controllers/carmodel");

router.post("/new", upload_bannerImages.single('fimage'), carmodel.addCarmodel);
router.get("/all", carmodel.getallCarModels);
router.put("/edit/:id",upload_bannerImages.single('fimage'), carmodel.updateCarModel);
router.delete("/delete/:id", carmodel.deleteCarModel);

module.exports = router;
