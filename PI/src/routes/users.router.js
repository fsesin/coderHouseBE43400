import {
  createUser,
  addUserToCourse,
  getUsers,
  getUserById,
} from "../controllers/users.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", getUsers);
router.get("/:idUser", getUserById);
router.post("/", createUser);
router.post("/:idUser/courses/:idCourse", addUserToCourse);

export default router;
