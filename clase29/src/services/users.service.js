import { usersMongo } from "../DAL/DAOs/MongoDAOs/usersMongo.dao.js";
import UsersDTO from "../DAL/DTOs/users.dto.js";
import { hashData } from "../utils.js";
class UsersService {
  async findAll() {
    const response = await usersMongo.findAll();
    return response;
  }

  async findOne(id) {
    const response = await usersMongo.findById(id);
    return response;
  }

  async createOne(obj) {
    const hashPassword = await hashData(obj.password);
    if (!hashPassword) throw new Error("Password can not be hashed");
    const userDTO = new UsersDTO({ ...obj, password: hashPassword });
    const response = await usersMongo.createOne(userDTO);
    return response;
  }

  async deleteOne(id) {
    const response = await usersMongo.deleteOne(id);
    return response;
  }
}

export const usersService = new UsersService();
