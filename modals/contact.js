const mongoose = require("mongoose");

// schema
const contactSchema = mongoose.Schema(
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
    },
    query: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
); //add createdAt and updatedAt fields to the Contact model

//model
const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
