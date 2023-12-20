const express = require("express");
const {
  addChannel,
  getAllChannel,
  getSingleChannel,
  deleteChannel,
} = require("../controllers/channelController");
const { validateAddChannel } = require("../validators/channelValidator");
const { isOperator, isLogedIn } = require("../middlewares/roleMiddleware");

const router = express.Router();

router.post("/add", validateAddChannel, isLogedIn, isOperator, addChannel);

router.get("/get-all", getAllChannel);

router.get("/get/:name", isLogedIn, getSingleChannel);

router.delete("/delete/:name", isLogedIn, isOperator, deleteChannel);

module.exports = router;
