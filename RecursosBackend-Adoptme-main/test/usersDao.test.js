import Users from "../src/dao/Users.dao.js";
import { expect } from "chai";
import "./db.js";

describe("Get users", function () {
  before(function () {
    this.usersManager = new Users();
  });
  it("should return an array of users", async function () {
    const response = await this.usersManager.get();
    expect(response).to.be.an("array");
  });
  it("should return an array with only one element", async function () {
    const response = await this.usersManager.get();
    expect(response).to.have.lengthOf(1);
  });
});

describe("Create users", function () {
  before(function () {
    this.usersManager = new Users();
  });
  after(async function () {
    const users = await this.usersManager.get();
    await this.usersManager.delete(users[1]._id);
  });
  it("should create the user", async function () {
    const user = {
      first_name: "Juan",
      last_name: "Hoyos",
      email: "jhoyos@mail.com",
      password: "12345",
    };

    const response = await this.usersManager.save(user);
    expect(response).to.have.property("_id");
  });
  it("should throw an error if email is missing", async function () {
    const user = {
      first_name: "Juan",
      last_name: "Hoyos",
      password: "12345",
    };
    try {
      const response = await this.usersManager.save(user);
    } catch (error) {
      expect(error).to.throw(Error);
    }
  });
});
