const express = require("express");
const router = express.Router();
const carprice = require("../controllers/carprice");

router.post("/new", carprice.new_carprice);
router.get("/all", carprice.getall_carprice);
router.get("/get/:id", carprice.getByid_carprice)
router.put("/edit/:id", carprice.edit_carprice)
router.delete("/delete/:id", carprice.delete_carprice)
router.get("/active", carprice.active_cars)

module.exports = router;
