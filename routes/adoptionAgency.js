const express = require("express");
const {
  handleCreateAgency,
  getAllAgency,
  getAgencyById,
  updateAgencyById,
  deleteAgencyById,
  login_authenticate,
} = require("../controllers/adoptionAgency");
const router = express.Router();

router
  .route("/")
  .post(handleCreateAgency) // CREATE - POST new adoption agency
  .get(getAllAgency); // READ - GET all adoption agencies

router
  .route("/:id")
  .get(getAgencyById) // READ - GET a single adoption agency by ID
  .patch(updateAgencyById) // UPDATE - PUT/update an existing adoption agency
  .delete(deleteAgencyById); // DELETE - DELETE an adoption agency

router.route("/login").post(login_authenticate);

module.exports = router;
