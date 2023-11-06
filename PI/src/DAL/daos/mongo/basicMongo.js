export default class BasicMongo {
  constructor(model, populateOptions) {
    this.model = model;
    this.populateOptions = populateOptions;
  }

  async getAll() {
    const response = await this.model.find().populate(this.populateOptions);
    return response;
  }

  async getById(id) {
    const response = await this.model
      .findById(id)
      .populate(this.populateOptions);
    return response;
  }

  async createOne(obj) {
    const response = await this.model.create(obj);
    return response;
  }

  async updateOne(id, obj) {
    const response = await this.model.findByIdAndUpdate(id, obj, { new: true });
    return response;
  }

  async deleteOne(id) {
    const response = await this.model.findByIdAndDelete(id);
    return response;
  }
}
