import { usersModel } from "../../mongoDB/models/users.model.js";

export default class UsersMongo {
  async getAll() {
    const users = await usersModel.find();
    return users;
  }

  async getById(id) {
    const user = await usersModel.findById(id);
    return user;
  }

  async create(obj) {
    const createdUser = await usersModel.create(obj);
    return createdUser;
  }
}
