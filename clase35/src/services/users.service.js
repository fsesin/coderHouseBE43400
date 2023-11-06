import { usersMongo } from "../DAL/daos/mongo/usersMongo.js";

class UsersService {
  async getAll() {
    return await usersMongo.getAll();
  }

  async getById(id) {
    return await usersMongo.getById(id);
  }

  async getByEmail(email) {
    return await usersMongo.getByEmail(email);
  }

  async create(user) {
    return await usersMongo.create(user);
  }

  async update(id, user) {
    return await usersMongo.update(id, user);
  }
}

export const usersService = new UsersService();
