const User = require("../models/User");
const bcrypt = require("bcrypt");

const userService = {
  getAllUsers: () => {
    return User.find({});
  },

  deleteUser: (id) => {
    return User.findByIdAndDelete(id);
  },

  updateUser: async (id, data) => {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(data.password, salt);   
    data = {...data, password: hashed};
    return User.findOneAndUpdate(id, data);
  },
}

module.exports = userService;