const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport= require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controller/users");

//Routes
//Starting with "/signup"
router.route("/signup")
.get(userController.signupRender)
.post(wrapAsync(userController.signup));


//starting with "/login"
router.route("/login")
.get(userController.loginRender)
.post( saveRedirectUrl, passport.authenticate("local",{ failureRedirect: "/login", failureflash: true}), userController.login);

// Log Out
router.get("/logout", userController.logout);

module.exports= router;