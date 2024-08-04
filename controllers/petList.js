const PetList = require("../modals/PetList");


//show all pet in json
const handleGetAllPet = async (req, res) => {
  // /users
  const allUser = await PetList.find({});
  return res.json(allUser);
};

//create a pet
const handleCreatePet = async (req, res) => {
  // /pets
  const body = req.body;
  const result = await PetList.create({
    name: body.name,
    species: body.species,
    breed: body.breed,
    age: body.age,
    gender: body.gender,
    size: body.size,
    color: body.color,
    discription: body.discription,
    availableForAdoption: body.availableForAdoption,
    photos: body.photos,
    location: body.location,
    adoptionAgency: body.adoptionAgency,
  });
  console.log(body, "body", result);
  return res.status(201).json({ status: "success" });
};

//dynamic path - show user with specific id
const getPetById = async (req, res) => {
  const allUser = await PetList.find({});
  const data = allUser.filter((item) => item?._id == req.params.id);
  // const html = `
  //         <div>
  //         ${data
  //           .map((item, i) => {
  //             return `
  //           <ul>
  //               <li>id = ${item._id}</li>
  //               <li>name: ${item.name}</li>
  //               <li>phone: ${item.phone}</li>
  //               <li>email: ${item.email}</li>
  //               <li>password: ${item.password}</li>
  //               <li>address: ${item.address}</li>
  //               <li>pincode: ${item.pincode}</li>
  //               <li>state: ${item.state}</li>
  //               <li>city: ${item.city}</li>
  //               <li>aadharCard: ${item.aadharCard}</li>
  //           </ul>
  //               `;
  //           })
  //           .join("")}
  //         </div>
  //           `;
  // return res.send(html);
  return res.json(data);
};

//edit pet
const updatePetById = async (req, res) => {
  const { firstName, lastName, email, gender, jobTitle } = req.body;
  console.log(firstName, lastName, email, gender, jobTitle, "patch body");
  if (!firstName && !lastName && !email && !gender && !jobTitle) {
    return res.json({ message: "Failure, value can't be empty" });
  }

  await PetList.findByIdAndUpdate(req.params.id, {
    firstName,
    lastName,
    email,
    gender,
    jobTitle,
  });
  return res.json({ status: "success", id: req.params.id });
};

//delete pet
const deletePetById = async (req, res) => {
  await PetList.findByIdAndDelete(req.params.id);
  return res.json({ status: "success", id: req.params.id });
};



module.exports = {
  handleGetAllPet,
  handleCreatePet,
  getPetById,
  updatePetById,
  deletePetById,
};
