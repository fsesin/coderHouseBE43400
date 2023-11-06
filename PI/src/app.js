import express from "express";
import coursesRouter from "./routes/courses.router.js";
import usersRouter from "./routes/users.router.js";
import config from "./config.js";
import "./DAL/db/configDB.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/users", usersRouter);
app.use("/api/courses", coursesRouter);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
