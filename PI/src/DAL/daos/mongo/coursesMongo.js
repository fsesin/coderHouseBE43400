import BasicMongo from "./basicMongo.js";
import { coursesModel } from "../../db/models/courses.model.js";

class CoursesModel extends BasicMongo {
  constructor() {
    super(coursesModel, ["students", "teacher"]);
  }
}

export const coursesMongo = new CoursesModel();
