const User = require("../modals/user");

//show all user in json
const handleGetAllUser = async (req, res) => {
  // /users
  const allUser = await User.find({});
  return res.json(allUser);
};

//create a user
const handleCreateUser = async (req, res) => {
  // /users
  const body = req.body;
  // console.log(body);
  const result = await User.create({
    name: body.name,
    phone: body.phone,
    email: body.email,
    password: body.password,
    address: body.address,
    pincode: body.pincode,
    state: body.state,
    city: body.city,
    aadharCard: body.aadharCard,
  });
  console.log(body, "body", result);
  return res.status(201).json({ status: "success" });
};

//dynamic path - show user with specific id
const getUserById = async (req, res) => {
  const allUser = await User.find({});
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

//edit user
const updateUserById = async (req, res) => {
  const { firstName, lastName, email, gender, jobTitle } = req.body;
  console.log(firstName, lastName, email, gender, jobTitle, "patch body");
  if (!firstName && !lastName && !email && !gender && !jobTitle) {
    return res.json({ message: "Failure, value can't be empty" });
  }

  await User.findByIdAndUpdate(req.params.id, {
    firstName,
    lastName,
    email,
    gender,
    jobTitle,
  });
  return res.json({ status: "success", id: req.params.id });
};

//delete user
const deleteUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success", id: req.params.id });
};

const login_authenticate=async(req,res)=>{
  const {email,password} = req.body
  const ver = await User.findOne({email,password});
  
  if(ver)
  {
      console.log("authenticated");
      return res.status(200).json({ status: "success" });
  }
  else
      console.log("not authenticated");
      return res.status(400).json({ status: "failure" });

}
module.exports = {
  handleGetAllUser,
  handleCreateUser,
  getUserById,
  updateUserById,
  deleteUserById,
  login_authenticate
};
