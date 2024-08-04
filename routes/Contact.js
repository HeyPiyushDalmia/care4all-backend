const express = require("express");
const router = express.Router();
const {
    handleGetAllContact,
    handleCreateContact,
    getContactById,
  } = require("../controllers/contact");

router.route("/").get(handleGetAllContact).post(handleCreateContact); // /user
router
  .route("/:id") // /users/id
  .get(getContactById)

module.exports = router;