///
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
require("dotenv").config();
const { generate } = require("shortid");

////

///////haspass

const hashPassword = async (password) => {
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
};

///////generateToken

const generateToken = (user) => {
  const payLoad = {
    _id: user._id,
    username: user.username,
  };
  const token = jwt.sign(payLoad, process.env.SECRECT_KEY, {
    expiresIn: "350d",
  });
  return token;
};

///sign-up

const register = async (req, res, next) => {
  try {
    const password = req.body.password;
    const hashedPassword = await hashPassword(password);
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body); // user
    const token = generateToken(newUser);

    res.status(201).json({ token: token });
  } catch (err) {
    next(err);
  }
};

///sign-in
const login = async (req, res, next) => {
  try {
    const token = generateToken(req.user);
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };

////
