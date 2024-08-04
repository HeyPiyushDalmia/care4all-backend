const mongoose = require("mongoose");

//connection
async function connectMongoDb(url) {
  return await mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error", err));
}

module.exports = connectMongoDb;
