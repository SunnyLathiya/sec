import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import {
  validateUser,
  validateUserById,
} from "../middleware/inputValidator.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", validateUserById, getUserById);
router.post("/users", validateUser, createUser);
router.put("/users/:id", validateUserById, validateUser, updateUser);
router.delete("/users/:id", validateUserById, deleteUser);

export default router;
