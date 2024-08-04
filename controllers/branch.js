const Branches = require("../modals/branch");

const handleCreateBranch = async (req, res) => {
  
    // const agency = new AdoptionAgency(req.body);
    // await agency.save();
    const {
      name,
      email,
      register_no,
      location,
      contact,
      adoptionAgency,
      password
    } = req.body;
    const branch = await Branches.create({
      name,
      email,
      register_no,
      location,
      contact,
      adoptionAgency,
      password
    });
    console.log(branch);
    
    res.status(201).json({ message: "Success" });
};

const deleteBranchById = async (req, res) => {
    await Branches.findByIdAndDelete(req.params.id);
    return res.json({ status: "success", id: req.params.id });
  };
  

module.exports={
    handleCreateBranch,
    deleteBranchById
};
