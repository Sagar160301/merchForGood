const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    para1: { type: String, required: true },
    para2: { type: String, required: true },
    para3: { type: String, required: true },
    video: { type: String, required: true },
    benefit: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
