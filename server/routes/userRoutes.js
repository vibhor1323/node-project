const express = require("express");
const userController = require("../controllers/userController.js");
const userAuth = require("../middleware/userAuth.js");

const router = express.Router();

router.post("/signup", userAuth.saveUser, function (req, res) {
  userController.signup(req, res);
});

router.post("/login", (req, res) => userController.login(req, res));

module.exports = router;
