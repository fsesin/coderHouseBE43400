import { usersModel } from "../../db/models/users.model.js";

class UsersMongo extends BasicMongo {
  constructor(model) {
    super(model, ["courses"]);
  }

  async getByEmail(email) {
    return await this.model.findOne({ email });
  }
}

export const usersMongo = new UsersMongo(usersModel);
