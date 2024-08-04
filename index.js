const express = require("express");
const cors =require("cors");
const UserRouter = require("./routes/user");
const AgencyRouter = require("./routes/adoptionAgency");
const PetRouter = require("./routes/petList");
const ContactRouter = require("./routes/Contact");
const BranchRouter = require("./routes/branch");
const connectMongoDb = require("./connection");
const { maintainLogFile } = require("./middlewares/maintainLogFile");
const body=require("body-parser");

const app = express();
app.use(
  cors({
    origin:"https://care4all.vercel.app",
    methods:["GET","POST","PUT","DELETE"],
  })
);


//connection
connectMongoDb(
  "mongodb+srv://piyushdalmia9900:e2u4egB6Y1FJawv4@care4all.io00uxb.mongodb.net/care4allbackend"
);

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(maintainLogFile("./log.txt"));
app.use(body.json());
app.use(body.urlencoded({ extended: true }));

// routes
app.use("/api/users", UserRouter);
app.use("/api/adoptionAgencies", AgencyRouter);
app.use("/api/pet", PetRouter);
app.use("/api/Contact",ContactRouter);
app.use("/api/branch",BranchRouter);

//server
app.listen(8000, () => console.log("Server Started at port: 8000"));


