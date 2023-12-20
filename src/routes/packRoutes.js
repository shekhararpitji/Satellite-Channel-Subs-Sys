const express = require("express");
const {
  addPackage,
  getAllPackage,
  getSinglePackage,
  deletePackage,
} = require("../controllers/packController");
const { validateAddPackage } = require("../validators/packValidator");

const router = express.Router();

router.post("/add", validateAddPackage, addPackage);

router.get("/get-all", getAllPackage);

router.get("/:id", getSinglePackage);

router.delete("/delete/:id", deletePackage);

module.exports = router;
