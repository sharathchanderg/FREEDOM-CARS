const express = require("express");
const router = express.Router();
const coupons = require("../controllers/coupon");

router.post("/new", coupons.new_coupon);
router.put("/edit/:id", coupons.edit_coupon);
router.delete("/delete/:id", coupons.delete_coupon);
router.get("/all", coupons.getAllCoupons);

module.exports = router;
