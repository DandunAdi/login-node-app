import express from "express";
import {
  addUser,
  getAllUsers,
  getUserById,
} from "../controllers/user.controller";
import { validateUser } from "../middlewares/user.middleware";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", validateUser, addUser);

export default router;
