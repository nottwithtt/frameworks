const express = require("express");
const {
    getAllUsers,
    getContactsByUser
} = require("../controllers/userController");

const router = express.Router();

router.post("/contById", getContactsByUser);
router.get("/allUsers", getAllUsers); // no ocuopa nada

module.exports = router;
