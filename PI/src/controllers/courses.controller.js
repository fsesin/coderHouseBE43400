import { coursesService } from "../services/courses.service.js";

export const getCourseById = async (req, res) => {
  const { idCourse } = req.params;
  try {
    const course = await coursesService.getById(idCourse);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course", course });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createCourse = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Course name is missing" });
  }
  try {
    const createdCourse = await coursesService.createOne(req.body);
    res.status(200).json({ message: "Course created", course: createdCourse });
  } catch (error) {
    res.status(500).json({ error });
  }
};
