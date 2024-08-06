const express = require("express");
const {
  login,
  register,
  createSession,
} = require("../controllers/authenticationController");
const router = express.Router();

router.post("/login", login, createSession);
router.post("/register", register, createSession);
module.exports = router;
