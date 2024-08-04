const mongoose = require("mongoose");

// schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    pincode: {
      type: Number,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    aadharCard: {
      type: Number,
    },
  },
  { timestamps: true }
); //add createdAt and updatedAt fields to the User model

//model
const User = mongoose.model("user", userSchema);

module.exports = User;
