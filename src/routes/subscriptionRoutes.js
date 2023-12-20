const express = require("express");
const router = express.Router();
const {
  subscribePackage,
  subscribeAddon,
} = require("../controllers/subscriptionController");
const { isLogedIn } = require("../middlewares/roleMiddleware");

router.post("/:packId", isLogedIn, subscribePackage);
router.post("/addon/:packId", isLogedIn, subscribeAddon);

module.exports = router;
