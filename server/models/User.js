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


// userSchema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

module.exports = mongoose.model("User", userSchema);
