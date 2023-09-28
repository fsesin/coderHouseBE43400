class ToysManager {
  constructor() {
    this.toys = [];
  }
  create(obj) {
    this.toys.push(obj);
    return obj;
  }
  findAll() {
    return this.toys;
  }
}

export const toysManager = new ToysManager();
