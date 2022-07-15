const mongoose = require("mongoose");
const ROLES = {
  ADMIN:'ADMIN',
  VIEWER:'VIEWER',
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 1,
      max: 20,
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
      min: 6,
    },
    role: {
      type: String,
      default: ROLES.VIEWER,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
