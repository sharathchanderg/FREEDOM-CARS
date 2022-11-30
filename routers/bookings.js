const express = require("express");
const router = express.Router();
const bookinglist = require("../controllers/bookingList");

router.post("/new", bookinglist.new_booking);
router.put("/edit/:id", bookinglist.edit_booking);
router.delete("/delete/:id", bookinglist.delete_booking);
router.get("/all", bookinglist.getAllBookings);

module.exports = router;
