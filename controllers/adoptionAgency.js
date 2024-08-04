const AdoptionAgency = require("../modals/adoptionAgency");

const handleCreateAgency = async (req, res) => {
  
    // const agency = new AdoptionAgency(req.body);
    // await agency.save();
    const {
      name,
      email,
      register_no,
      location,
      contact,
      isHeadOffice,
      description,
      operatingHours,
      password,
    } = req.body;
    const agency = await AdoptionAgency.create({
      name,
      email,
      register_no,
      location,
      contact,
      isHeadOffice,
      description,
      operatingHours,
      password,
    });
    console.log(agency);
    
    res.status(201).json({ message: "Success" });
};

const getAllAgency = async (req, res) => {
  try {
    const agencies = await AdoptionAgency.find();
    res.json(agencies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAgencyById = async (req, res) => {
  let agency;
  try {
    agency = await AdoptionAgency.findById(req.params.id);
    if (agency == null) {
      return res.status(404).json({ message: "Adoption agency not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.agency = agency;
};

const updateAgencyById = async (req, res) => {
  try {
    const updatedAgency = await AdoptionAgency.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedAgency);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteAgencyById = async (req, res) => {
  try {
    await AdoptionAgency.findByIdAndDelete(req.params.id);
    res.json({ status: "success", id: req.params.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login_authenticate = async (req, res) => {
  const { email, password } = req.body;
  const ver = await AdoptionAgency.findOne({
    email,
    password,
  });
  if (ver) 
  {console.log("authenticated");
  return res.status(200).json({ message: "Success" });
  }
  else 
  console.log("not authenticated");
  return res.status(400).json({ status: "failure" });
  
};
module.exports = {
  handleCreateAgency,
  getAllAgency,
  getAgencyById,
  updateAgencyById,
  deleteAgencyById,
  login_authenticate
};
