const express = require("express");

const connect = require("./config/db");
const cors = require("cors");

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

app.listen(8000, async () => {
  try {
    await connect();
    console.log("listening to the port number 5902");
  } catch (error) {
    console.log(error);
  }
});
