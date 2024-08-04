const Contact = require("../modals/contact");
const handleGetAllContact = async (req, res) => {
    // /contacts
    const allContact = await Contact.find({});
    // const drop = await Contact.collection.drop();
    return res.json(allContact);
    
  };
  
  //create a contact
  const handleCreateContact = async (req, res) => {
    // /contacts
    const body = req.body;
    console.log(body);
    const result = await Contact.create({
      name: body.name,
      phone: body.phone,
      email: body.email,
      query: body.query,
      
    });
    console.log(body, "body", result);
    return res.status(200).json({ status: "success" });
  };
  
//   dynamic path - show contact with specific id
  const getContactById = async (req, res) => {
    const allContact = await Contact.find({});
    const data = allContact.filter((item) => item?._id == req.params.id);
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
  module.exports = {
    handleGetAllContact,
    handleCreateContact,
    getContactById
  };
    