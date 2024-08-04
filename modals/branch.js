const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
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
  password:{
    type:String,
    required:true
  },
  adoptionAgency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AdoptionAgency',
  },
}, { timestamps: true });

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;
