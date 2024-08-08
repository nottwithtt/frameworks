const express = require("express");
const {
    getAllUsers,
    getContactsByUser
} = require("../controllers/userController");

const router = express.Router();

router.get("/contById", getContactsByUser)
router.get("/allUsers", getAllUsers); // no ocuopa nada

module.exports = router;
