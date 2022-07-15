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


    // editUser: async (req, res) => {
    //   const salt = await bcrypt.genSalt(10);
    //   const hashed = await bcrypt.hash(req.body.password, salt);
    //   const user = await User.findById(req.params.id)
    //   const editUsername = req.body.username;
    //   const editEmail = req.body.email;
    //   const editPassword = hashed;
    //   try {
    //     if (!user) {
    //       return res.status(403).json("User not found" );
    //     }
    //     user.username = editUsername;
    //     user.email = editEmail;
    //     user.password = editPassword;
    //     await user.save();
    //     return res.status(200).json({ message: "UPDATED!", user });
    //   } catch (err) {
    //     res.status(500).json(err);
    //   }
    // },
}

module.exports = userService;