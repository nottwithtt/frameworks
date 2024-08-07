const express = require("express");
const {
  login,
  register,
  createSession,
  verifyToken,
} = require("../controllers/authenticationController");
const router = express.Router();

router.post("/login", login, createSession);
router.post("/register", register, createSession);
router.get("/verify-token", verifyToken)
module.exports = router;
