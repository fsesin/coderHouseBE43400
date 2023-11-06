export default class BasicMongo {
  constructor(model, propsToPopulate) {
    this.model = model;
    this.propsToPopulate = propsToPopulate;
  }

  async getAll() {
    const populateoptions = this.propsToPopulate.join(" ");
    return await this.model.find().populate(populateoptions);
  }

  async getById(id) {
    const populateoptions = this.propsToPopulate.join(" ");
    return await this.model.findById(id).populate(populateoptions);
  }

  async create(data) {
    return await this.model.create(data);
  }

  async update(id, data) {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }
}
