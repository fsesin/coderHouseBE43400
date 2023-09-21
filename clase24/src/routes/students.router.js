import { Router } from "express";
import { studentsMongo } from "../db/managers/students.manager.js";
import { hashData } from "../utils.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const students = await studentsMongo.findAll();
    if (!students.length) {
      return res.status(200).json({ message: "No students" });
    }
    res.status(200).json({ message: "Students found", students });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:idStudent", async (req, res) => {
  const { idStudent } = req.params;
  try {
    const student = await studentsMongo.findById(idStudent);
    if (!student) {
      return res
        .status(404)
        .json({ message: "No student found with the id provided" });
    }
    res.status(200).json({ message: "Student found", student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  if (!first_name || !last_name || !email || !password) {
    res.status(400).json({ message: "Required data is missing" });
  }
  try {
    const hashPassword = await hashData(password);
    const newUser = { ...req.body, password: hashPassword };
    const response = await studentsMongo.createOne(newUser);
    res.status(200).json({ message: "Student created", response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:idStudent", async (req, res) => {
  const { idStudent } = req.params;
  try {
    const response = await studentsMongo.deleteOne(idStudent);
    if (!response) {
      return res
        .status(404)
        .json({ message: "No student found with the id provided" });
    }
    res.status(200).json({ message: "Student deleted", student: response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// aut
export default router;
