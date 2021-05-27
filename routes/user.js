const express = require("express");
const router = express.Router();
const passport = require("passport")

const userCtrl = require("../controllers/userController");

router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);
router.get("/logout", userCtrl.logout);
router.get("/user", userCtrl.findAll);

// router.get("/rahasia", passport.authenticate("jwt", {session: false}), userCtrl.dashboard);

module.exports = router;
