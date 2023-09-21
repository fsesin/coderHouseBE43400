import { coursesModel } from "../models/courses.model.js";
import BasicMongo from "./basic.manager.js";
class CoursesMongo extends BasicMongo {
  constructor() {
    super(coursesModel, "students");
  }
}

export const coursesMongo = new CoursesMongo();
