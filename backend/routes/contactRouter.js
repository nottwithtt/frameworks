const express = require("express");
const {
    addContact,
} = require("../controllers/contactController");

const router = express.Router();
router.post("/crearContacto", addContact); //ocupa userId y user_contacto_Id


module.exports = router;
