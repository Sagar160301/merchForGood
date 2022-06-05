const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");

router.post("/", async (req, res) => {
  try {
    // console.log(req);
    let product = await Product.create(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id).lean().exec();
    return res.status(201).send(product);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    let products = await Product.find({}).lean().exec();
    return res.status(201).send(products);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

module.exports = router;
