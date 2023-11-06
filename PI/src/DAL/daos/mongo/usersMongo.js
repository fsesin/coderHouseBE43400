import BasicMongo from "./basicMongo.js";
import { usersModel } from "../../db/models/users.model.js";
class UsersMongo extends BasicMongo {
  constructor() {
    super(usersModel, ["courses"]);
  }

  async getByEmail(email) {
    const response = await usersModel.findOne({ email });
    return response;
  }
}

export const usersMongo = new UsersMongo();
