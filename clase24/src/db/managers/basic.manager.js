export default class BasicMongo {
  constructor(model, populateProp) {
    this.model = model;
    this.populateProp = populateProp;
  }
  async findAll() {
    try {
      const response = await this.model.find().populate(this.populateProp);
      return response;
    } catch (error) {
      return error;
    }
  }

  async findById(id) {
    try {
      const response = await this.model
        .findById(id)
        .populate(this.populateProp);
      return response;
    } catch (error) {
      return error;
    }
  }

  async createOne(obj) {
    try {
      const response = await this.model.create(obj);
      return response;
    } catch (error) {
      return error;
    }
  }

  async deleteOne(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateOne(id, obj) {
    try {
      const response = await this.model.updateOne({ _id: id }, { $set: obj });
      return response;
    } catch (error) {
      return error;
    }
  }
}
