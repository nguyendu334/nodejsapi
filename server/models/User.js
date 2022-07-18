const mongoose = require("mongoose");
const ROLES = require("../constants/role"); 

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: ROLES.VIEWER,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);
