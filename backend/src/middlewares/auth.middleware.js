const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  return jwt.verify(token, process.env.key);
};

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(404).send({ message: "token  not found" });
    }

    if (!req.headers.authorization.startsWith("Bearer ")) {
      return res.status(404).send({ message: "token  in inalid" });
    }

    let token = req.headers.authorization.split(" ")[1];
    let userDetails = verifyToken(token);
    req.body.userId = userDetails.user._id;
    next();
  } catch (error) {
    return res.status(201).send({ message: error.message });
  }
};

module.exports = authMiddleware;
