const express = require("express");

const {handleCreateBranch,
    deleteBranchById}=require("../controllers/branch");

const router = express.Router();


router.route("/").post(handleCreateBranch)


router.route("/:id").delete(deleteBranchById);


module.exports=router;