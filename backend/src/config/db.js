const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://merch:merch@cluster0.4zzveyp.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;
