const express = require("express");

const connect = require("./config/db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
// all contorllers start here
const ProductController = require("./controllers/product.controller");
//all controllers end here

// controllers route
app.use("/products", ProductController);
app.get("/", (req, res) => {
  res.send("hello");
});
// constrollers route

app.listen(5901, async () => {
  try {
    await connect();
    console.log("listening to the port number 5901");
  } catch (error) {
    console.log(error);
  }
});
