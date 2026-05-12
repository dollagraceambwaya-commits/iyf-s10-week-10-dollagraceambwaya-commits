// src/routes/users.js
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// usersController.getAllUsers must be a function
router.get("/", usersController.getAllUsers);

module.exports = router;
