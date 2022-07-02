const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    cartProducts: [
      {
        productId: { type: String, required: true },
        count: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("cartProduct", userSchema);
