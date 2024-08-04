const express = require("express");
const router = express.Router();

const {
  handleGetAllUser,
  handleCreateUser,
  getUserById,
  updateUserById,
  deleteUserById,
  login_authenticate,
} = require("../controllers/user");

router.route("/").get(handleGetAllUser).post(handleCreateUser); // /user

router
  .route("/:id") // /users/id
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

router.route("/login").post(login_authenticate);
module.exports = router;
