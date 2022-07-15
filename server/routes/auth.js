const authController = require("../controllers/authController");
const router = require("express").Router();
const auth = require("../middleware/auth");
const validator = require('../middleware/validate');


//REGISTER
router.post("/register", validator('register'), authController.registerUser);
//REFRESH TOKEN
router.post("/refresh", authController.requestRefreshToken);
//LOG IN
router.post("/login", validator('login'), authController.loginUser);
//LOG OUT
router.post("/logout", auth.verifyToken, authController.logOut);

module.exports = router;  