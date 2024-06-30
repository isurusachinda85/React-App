const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserController = {
  saveUser: async function (req, res, next) {
    try {
      const { username, email, password, confirmPassword } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      const hashconPassword = await bcrypt.hash(password, 10);

      const createuser = new User({
        username,
        email,
        password: hashPassword,
        confirmPassword: hashconPassword,
      });
      const user = await User.create(createuser);
      res.status(201).json({ user: user, message: "Register Successfully" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Something went wrong !" });
    }
  },

  loginUser: async function (req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      console.log(user);
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const payload = { user: { id: user.id } };
      jwt.sign(payload, "yourSecretKey", { expiresIn: "1h" }, (err, token) => {
        if (err) throw err;
        res.json({ token: token, user: user });
      });
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server error");
    }
  },
};

module.exports = UserController;
