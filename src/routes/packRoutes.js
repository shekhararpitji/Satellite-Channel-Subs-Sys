const express = require("express");
const {
  addPackage,
  getAllPackage,
  getSinglePackage,
  deletePackage,
} = require("../controllers/packController");
const { validateAddPackage } = require("../validators/packValidator");
const { isLogedIn, isOperator } = require("../middlewares/roleMiddleware");

const router = express.Router();

router.post("/add", validateAddPackage, isLogedIn,isOperator, addPackage);

router.get("/get-all", getAllPackage);

router.get("/:id", getSinglePackage);

router.delete("/delete/:id",isLogedIn,isOperator, deletePackage);

module.exports = router;
