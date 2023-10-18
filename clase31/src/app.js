import express from "express";
import { generateUser } from "./mocks.js";

const app = express();

app.get("/api/users", (req, res) => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    const userMock = generateUser();
    users.push(userMock);
  }
  res.json(users);
});

app.listen(8080, () => {
  console.log("Conectado al puerto 8080");
});
