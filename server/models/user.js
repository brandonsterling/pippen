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

  reset_token: {
    type: String,
    required: [false, "Please provide a token!"],
    unique: false,
  },
  last_login_date: {
    type: Date,
    unique: false,
  },
});

module.exports =
  mongoose.model.UserSchema || mongoose.model("User", UserSchema);
