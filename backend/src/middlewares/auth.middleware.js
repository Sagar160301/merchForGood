const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  return jwt.verify(token, process.env.key);
};

const authMiddleware = async (req, res, next) => {
  try {
    console.log(req.body, "body");
    if (!req.headers.authorization) {
      return res
        .status(404)
        .send({ message: "token  not found", status: "failed" });
    }

    if (!req.headers.authorization.startsWith("Bearer ")) {
      return res
        .status(404)
        .send({ message: "token  in inalid", status: "failed" });
    }

    let token = req.headers.authorization.split(" ")[1];
    let userDetails = verifyToken(token);
    // req.body.userId = userDetails.user._id;
    req.userId = userDetails.user._id;
    next();
  } catch (error) {
    return res.status(201).send({ message: error.message, status: "failed" });
  }
};

module.exports = authMiddleware;
