const User = require("../model/User");

const UserController = {
  saveUser: async function (req, res, next) {
    const userData = req.body;
    const user = await User.create(userData);
    res.status(201).json(user);
  },
};

module.exports = UserController;
