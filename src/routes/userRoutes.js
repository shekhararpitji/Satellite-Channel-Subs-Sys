import express from"express";
// const jwtVerify = require("../middlewares/jwtVerify");
import {registerCtrl} from"../controllers/userController.js";

const router = express.Router();

router.post("/register", registerCtrl);

// router.post("/login", userController.loginCtrl);

// router.get("/get", jwtVerify.authMiddle, userController.getAllCtrl);

// router.put("/delete", jwtVerify.authMiddle, userController.deleteCtrl);

export default router;
