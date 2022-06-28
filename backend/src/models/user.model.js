const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    FirstName: { type: String },
    LastName: { type: String },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Address: [{}],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.Password, 8);
  console.log(hash);
  this.Password = hash;
  return next();
});

module.exports = mongoose.model("user", userSchema);
