const User = require("../models/User");

const userService = {
    getAllUsers: () => {
        return User.find({});
    },

    deleteUser: (id) => {
        return User.findByIdAndDelete(id);
    },

    updateUser: (id, data) => {
        return User.findOneAndUpdate(id, data);
    },
}

module.exports = userService;