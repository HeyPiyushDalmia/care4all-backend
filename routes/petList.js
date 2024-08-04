const express = require("express");
const {
  handleGetAllPet,
  handleCreatePet,
  getPetById,
  updatePetById,
  deletePetById,
} = require("../controllers/petList");
const router = express.Router();

router.route("/").get(handleGetAllPet).post(handleCreatePet); // /user

router
  .route("/:id") // /users/id
  .get(getPetById)
  .patch(updatePetById)
  .delete(deletePetById);

module.exports = router;
