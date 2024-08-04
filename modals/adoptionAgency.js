const mongoose = require("mongoose");

const adoptionAgencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  register_no: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isHeadOffice: {
    type: Boolean,
    default: false,
  },
  branchDetails: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },
  ],
  description: String,
  servicesOffered: [""], //e.g., pet adoption, fostering, rehabilitation etc.
  operatingHours: String,
  socialMediaLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
  },
  petListings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PetList",
    },
  ],
  paymentOptions: [""],
  certifications: [""],
  staffMembers: [
    {
      name: String,
      position: String,
    },
  ],
  reviews: [
    {
      author: String,
      text: String,
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
    },
  ],
  photos: [""],
  videos: [""],
}, { timestamps: true });

const AdoptionAgency = mongoose.model("AdoptionAgency", adoptionAgencySchema);

module.exports = AdoptionAgency;
