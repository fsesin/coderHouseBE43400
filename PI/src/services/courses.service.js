import { coursesMongo } from "../DAL/daos/mongo/coursesMongo.js";

class CoursesService {
  async getAll() {
    return coursesMongo.getAll();
  }

  async getById(id) {
    return coursesMongo.getById(id);
  }

  async createOne(obj) {
    return coursesMongo.createOne(obj);
  }

  async updateOne(id, obj) {
    return coursesMongo.updateOne(id, obj);
  }

  async deleteOne(id) {
    return coursesMongo.deleteOne(id);
  }
}

export const coursesService = new CoursesService();
