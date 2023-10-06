export default class BasicMongo {
  constructor(model) {
    this.model = model;
  }
  async findAll() {
    const response = await this.model.find();
    return response;
  }
  async findById(id) {
    const response = await this.model.findById(id);
    return response;
  }
  async createOne(obj) {
    const response = await this.model.create(obj);
    return response;
  }
  async deleteOne(id) {
    const response = await this.model.findByIdAndDelete(id);
    return response;
  }
}
