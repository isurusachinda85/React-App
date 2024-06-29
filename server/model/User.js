const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  username: {
    require: true,
    type: String,
    unique: true,
    index: true,
  },
  email: {
    require: true,
    type: String,
    unique: true,
  },
  password: {
    require: true,
    type: String,
    unique: true,
  },
  confirmPassword: {
    require: true,
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("User", UserModel);
