const express = require("express");
const packageController = require("../controllers/packageController");
const joi_validator = require("../joi-validator/joi-channel-validations");

const router = express.Router();

// add new channel
router.post(
  "/add-channel",
  joi_validator.validateAddChannel,
  packageController.addPackage
);

// get all channels
router.get("/get-all-channels", channelController.getAllChannel);

// get single channel by id
router.get("/:id", channelController.getSingleChannel);

// delete channel by id
router.delete("/:id", channelController.deleteChannel);
module.exports = router;