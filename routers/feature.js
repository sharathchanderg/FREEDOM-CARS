const express = require("express");
const router = express.Router();
const features = require("../controllers/feature");

router.post("/new", features.new_feature);
router.put("/edit/:id", features.edit_feature);1
router.delete("/delete/:id", features.delete_feature);
router.get("/all", features.getallCarfeatures);

module.exports = router;
