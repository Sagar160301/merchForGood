const Cart = require("../models/cart.model");
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, async (req, res) => {
  try {
    req.body.userId = req.userId;
    console.log(req.body);
    let userCart = await Cart.findOne({
      userId: req.body.userId,
    });

    if (!userCart) {
      // console.log(req.body, "body");
      userCart = await Cart.create(req.body);
    } else {
      let checkProductExistence = await Cart.findOne({
        userId: req.body.userId,
        "cartProducts.productId": req.body.cartProducts[0].productId,
      });

      if (!checkProductExistence) {
        userCart = await Cart.updateOne(
          { userId: req.body.userId },
          {
            $push: { cartProducts: req.body.cartProducts[0] },
          }
        );
      } else {
        //// this part is pending
        userCart = await Cart.updateOne(
          {
            userId: req.body.userId,
            "cartProducts.$.productId": req.body.cartProducts[0].productId,
          },
          {
            "cartProducts.$.count":
              cartProducts.$.count + req.body.cartProducts[0].count,
          }
        );
      }
    }
    return res.status(201).send({ status: "success" });
  } catch (error) {}
});
router.get("/", authMiddleware, async (req, res) => {
  try {
    let userCartProducts = await Cart.findOne({ userId: req.userId });
    return res.status(201).send(userCartProducts);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
});

module.exports = router;
