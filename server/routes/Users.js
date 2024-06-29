const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

router.post("/save", UserController.saveUser);

module.exports = router;
