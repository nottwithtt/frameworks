const express = require("express");
const {
  createMessage,
  getMessages,
} = require("../controllers/messageController");

const router = express.Router();

router.post("/crearMensaje", createMessage); //ocupa chat id y el texto
router.get("/:chatId", getMessages); // Ocupa chat id

module.exports = router;
