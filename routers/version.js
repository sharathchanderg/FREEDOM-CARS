const express = require("express");
const router = express.Router();
const versions = require("../controllers/version");

router.post("/new", versions.new_version);
router.put("/edit/:id", versions.edit_version);
router.delete("/delete/:id", versions.delete_version);
router.get("/all", versions.getAllVersion);

module.exports = router;
