const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [false, "Please provide a password!"],
    unique: false,
  },

  confirmed: {
    type: Boolean,
    required: [false, "Please provide a confirmation!"],
    unique: false,
  },
});

module.exports =
  mongoose.model.UserSchema || mongoose.model("User", UserSchema);
