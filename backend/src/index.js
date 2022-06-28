const express = require("express");

const connect = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
// all contorllers start here
const ProductController = require("./controllers/product.controller");
const userController = require("./controllers/user.controller");
//all controllers end here

// controllers start route
app.use("/products", ProductController);
app.use("/users", userController);
app.get("/", (req, res) => {
  res.send("hello");
});
// constrollers end route

// port
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

// port

app.listen(port, async () => {
  try {
    await connect();
    console.log("listening to the port number", port);
  } catch (error) {
    console.log(error);
  }
});
