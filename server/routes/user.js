const userController = require("../controllers/userController");
const validator = require('../middleware/validate');
const auth = require("../middleware/auth");

const router = require("express").Router(); 
// GET ALL USERS
router.get("/", userController.getAllUsers); 
// DELETE USER
router.delete("/:id", auth.verifyTokenAndUserAuthorization, userController.deleteUser);
// EDIT USER
router.put("/:id", validator('register'), auth.verifyTokenAndUserAuthorization, userController.updateUser);

module.exports = router;  