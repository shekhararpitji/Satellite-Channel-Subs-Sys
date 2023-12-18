const express = require("express");
const channelController = require("../controllers/channelController");
const validator = require("../validators/channelValidator");

const router = express.Router();

// add new channel
router.post(
  "/add-channel",
  validator.validateAddChannel,
  channelController.addChannel
);

// get all channels
router.get("/get-all-channels", channelController.getAllChannel);

// get single channel by id
router.get("/:id", channelController.getSingleChannel);

// delete channel by id
router.delete("/:id", channelController.deleteChannel);
module.exports = router;