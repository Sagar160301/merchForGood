const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user.model");

const checkPassword = (Password, user) => {
  return bcrypt.compareSync(Password, user.Password, function (err, result) {
    return result;
  });
};

const generateToken = (user) => {
  // console.log(process.env.key);
  return jwt.sign({ user }, process.env.key);
};
router.post("/signup", async (req, res) => {
  try {
    // console.log(req.body, "body");
    let user = await User.findOne({ Email: req.body.Email }).lean().exec();
    if (user) {
      return res.status(400).send({ message: " User Already Exist" });
    }
    user = await User.create(req.body);
    let token = generateToken(user);
    return res.status(201).send({ token, status: "success" });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    let user = await User.findOne({ Email: req.body.Email }).lean().exec();
    if (!user) {
      return res
        .status(400)
        .send({ message: "User does not exist", status: "Failed" });
    }
    let output = checkPassword(req.body.Password, user);
    if (!output) {
      return res
        .status(404)
        .send({ message: "password does not match", status: "Failed" });
    }
    let token = generateToken(user);
    return res.status(201).send({
      token,
      status: "success",
    });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
});

module.exports = router;
