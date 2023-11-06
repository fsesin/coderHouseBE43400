import {
  getCourseById,
  createCourse,
} from "../controllers/courses.controller.js";
import { Router } from "express";

const router = Router();

router.get("/:idCourse", getCourseById);
router.post("/", createCourse);

export default router;
