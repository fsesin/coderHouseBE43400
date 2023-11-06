import { usersMongo } from "../DAL/daos/mongo/usersMongo.js";
import { hashData } from "../utils/utils.js";
class UsersService {
  async getAll() {
    return usersMongo.getAll();
  }

  async getById(id) {
    return usersMongo.getById(id);
  }

  async getByEmail(email) {
    return usersMongo.getByEmail(email);
  }

  async createOne(obj) {
    const { password } = obj;
    const newPassword = await hashData(password);
    return usersMongo.createOne({ ...obj, password: newPassword });
  }

  async updateOne(id, obj) {
    return usersMongo.updateOne(id, obj);
  }

  async deleteOne(id) {
    return usersMongo.deleteOne(id);
  }
}

export const usersService = new UsersService();
