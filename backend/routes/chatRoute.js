const express = require("express");
const {
  createChat,
  userChats,
  findChat,
} = require("../controllers/chatController");

const router = express.Router();

router.post("/crearChat", createChat); //Ocupa emisor id y receptor id
router.get("/:userId", userChats); //ocupa user id
router.get("/find/:firstId/:secondId", findChat); //Ocupa emisor id y receptor id

module.exports = router;
