const express = require("express");
const router = express.Router();
const specification = require("../controllers/specification");

router.post("/new", specification.new_specification);
router.put("/edit/:id", specification.edit_specification);
router.delete("/delete/:id", specification.delete_specification);
router.get("/all", specification.getAllSpecification);

module.exports = router;
