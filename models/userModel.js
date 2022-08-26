const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is require"],
    },
    email: {
      type: String,
      required: [true, "Email is require"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Password is require"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("user", userSchema);
