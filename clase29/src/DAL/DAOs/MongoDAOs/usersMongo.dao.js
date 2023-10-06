import { usersModel } from "../../mongoDB/models/users.model.js";
import BasicMongo from "./basicMongo.dao.js";

class UsersMongo extends BasicMongo {
  constructor() {
    super(usersModel);
  }

  async findUserByRole(role) {
    const response = await usersModel.findOne({ role });
    return response;
  }
}

export const usersMongo = new UsersMongo();
