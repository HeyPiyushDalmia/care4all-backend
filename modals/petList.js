const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: String,
  age: Number,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Unknown'],
    default: 'Unknown',
  },
  size: {
    type: String,
    enum: ['Small', 'Medium', 'Large', 'Unknown'],
    default: 'Unknown',
  },
  color: String,
  description: String,
  availableForAdoption: {
    type: Boolean,
    default: true,
  },
  discription: {
    type: String,
    required: true,
  },
  photos: [String],
  location: String,
  adoptionAgency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AdoptionAgency',
  },
}, { timestamps: true });

const PetList = mongoose.model('Pet', petSchema);

module.exports = PetList;
