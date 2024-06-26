import { Router } from "express";
import {
  logOutUser,
  loginUser,
  periodTracker,
  refreshAccessToken,
  registerUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

// const router = require("express");

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "profileImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);
router.route("/calculate").post(periodTracker);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/logout").post(verifyJWT, logOutUser);
export default router;
