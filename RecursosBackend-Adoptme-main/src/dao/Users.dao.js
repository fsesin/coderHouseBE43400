import userModel from "./models/User.js";

export default class Users {
  get = (params) => {
    return userModel.find(params);
  };

  getBy = (params) => {
    return userModel.findOne(params);
  };

  async save(doc) {
    try {
      const response = await userModel.create(doc);
      return response;
    } catch (error) {
      throw new Error("Creation failed");
    }
  }

  update = (id, doc) => {
    return userModel.findByIdAndUpdate(id, { $set: doc });
  };

  delete = (id) => {
    return userModel.findByIdAndDelete(id);
  };
}
