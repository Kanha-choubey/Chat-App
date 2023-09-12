const express = require("express");
const {
  registerUser,
  loginUser,
  allUser,
} = require("../controllers/userController");
const protect = require("../middlewares/authMiddlewere");
const router = express.Router();

router.route("/").post(registerUser).get(protect, allUser);
router.route("/login").post(loginUser);

module.exports = router;
