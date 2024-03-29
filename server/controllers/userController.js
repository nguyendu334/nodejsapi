const User = require("../models/User");
const bcrypt = require("bcrypt");
const userService = require("../services/userService");

const userController = {
  // GET ALL USER
  getAllUsers: async (req, res) => {
    try {
      const user = await userService.getAllUsers();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE USER
  deleteUser: async (req, res) => {
    try {
      await userService.deleteUser(req.params.id);
      res.status(200).json("USER DELETED");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // EDIT USER
  updateUser: async (req, res) => {
    try {
      const user = await userService.updateUser({ _id: req.params.id }, req.body);
      if (!user)
        return res.status(404).json("User not found");
      return res.status(200).json({ message: "USER UPDATED!", user });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  editUser: async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const user = await User.findById(req.params.id)
    const editUsername = req.body.username;
    const editEmail = req.body.email;
    const editPassword = hashed;
    try {
      if (!user) {
        return res.status(403).json("User not found");
      }
      user.username = editUsername;
      user.email = editEmail;
      user.password = editPassword;
      await user.save();
      return res.status(200).json({ message: "UPDATED!", user });
    } catch (err) {
      res.status(500).json(err);
    }
  },

};

module.exports = userController;
