import fs from "fs";

const path = "Users.json";

export default class UsersFile {
  async getAll() {
    if (fs.existsSync(path)) {
      const users = await fs.promises.readFile(path, "utf-8");
      return JSON.parse(users);
    } else {
      return [];
    }
  }

  async getById(id) {
    const users = await this.getAll();
    const user = users.find((u) => u.id === id);
    return user;
  }

  async create(obj) {
    const users = await this.getAll();
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = { id, ...obj };
    users.push(obj);
    await fs.promises.writeFile(path, JSON.stringify(users));
    return newUser;
  }
}
