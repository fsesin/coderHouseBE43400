import supertest from "supertest";
import { expect } from "chai";
import mongoose from "mongoose";
const requester = supertest("http://localhost:8080");

// describe("Pets endpoints", () => {
//   describe("POST /api/pets", () => {
//     const petMock1 = {
//       name: "Paco",
//       specie: "Dog",
//       birthDate: "01/01/2022",
//     };
//     const petMock2 = {
//       specie: "Cat",
//       birthDate: "01/01/2022",
//     };
//     it("should create a pet with adopted property in false", async () => {
//       const response = await requester.post("/api/pets").send(petMock1);

//       expect(response._body.payload.adopted).to.be.false;
//     });
//     it("without name should return status code 400", async () => {
//       const response = await requester.post("/api/pets").send(petMock2);
//       expect(response.statusCode).to.be.equal(400);
//     });
//   });
//   describe("GET /api/pets", () => {
//     it("should return status and payload", async () => {
//       const response = await requester.get("/api/pets");
//       expect(response._body).to.have.property("status");
//       expect(response._body).to.have.property("payload");
//     });
//     it("expect payload to be an array", async () => {
//       const response = await requester.get("/api/pets");
//       expect(response._body.payload).to.be.an("array");
//     });
//   });
//   describe("PUT /api/pets/:pid", () => {
//     it("should update the pet", async () => {
//       const pets = await requester.get("/api/pets");
//       const pet = pets._body.payload[0];
//       const updatePet = { name: "Firulais" };
//       const response = await requester
//         .put("/api/pets/" + pet._id)
//         .send(updatePet);
//       console.log(response);
//       expect(response._body.status).to.be.equal("success");
//     });
//   });
// });

describe("Sessions endpoints", () => {
  const userMockRegister = {
    first_name: "Super",
    last_name: "Test",
    email: "stest1@mail.com",
    password: "12345",
  };

  const userMockLogin = {
    email: "stest@mail.com",
    password: "12345",
  };

  //   describe("POST /api/sessions/register", () => {
  //     // before(async function () {
  //     //   await mongoose.connection

  //     //     .collection("users")
  //     //     .deleteOne({ email: "stest@mail.com" });
  //     // });
  //     it("Should create a user", async () => {
  //       const response = await requester
  //         .post("/api/sessions/register")
  //         .send(userMockRegister);
  //       expect(response.statusCode).to.be.equal(200);
  //     });
  //   });
  describe("POST /api/sessions/login", () => {
    let cookie;
    it("should be success", async () => {
      const response = await requester
        .post("/api/sessions/login")
        .send(userMockLogin);
      cookie = {
        name: response.headers["set-cookie"][0].split("=")[0],
        value: response.headers["set-cookie"][0].split("=")[1].split("; ")[0],
      };

      expect(cookie.name).to.be.equal("coderCookie");
    });
    console.log(cookie);
  });
});
