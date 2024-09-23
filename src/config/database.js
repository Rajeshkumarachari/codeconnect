const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rajesh:smartpass@namastenode.sw2nr.mongodb.net/devTinder"
  );
};
module.exports = connectDB;
