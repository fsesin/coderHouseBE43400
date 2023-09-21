import { studentsModel } from "../models/students.model.js";
import BasicMongo from "./basic.manager.js";

class StudentsMongo extends BasicMongo {
  constructor() {
    super(studentsModel, "course");
  }

  async findByEmail(email) {
    try {
      const response = await studentsModel.findOne({ email });
      return response;
    } catch (error) {
      return error;
    }
  }
}

export const studentsMongo = new StudentsMongo();
