import { coursesMongo } from "../DAL/daos/mongo/coursesMongo.js";

class CoursesService {
  async getAll() {
    return await coursesMongo.getAll();
  }

  async getById(id) {
    return await coursesMongo.getById(id);
  }

  async create(course) {
    return await coursesMongo.create(course);
  }

  async update(id, course) {
    return await coursesMongo.update(id, course);
  }
}

export const coursesService = new CoursesService();
