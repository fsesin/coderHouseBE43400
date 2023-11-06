import { coursesModel } from "../../db/models/courses.model.js";

class CoursesMongo extends BasicMongo {
  constructor(model) {
    super(model, ["students", "teacher"]);
  }
}

export const coursesMongo = new CoursesMongo(coursesModel);
