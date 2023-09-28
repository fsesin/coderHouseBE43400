import express from "express";
import config from "./config.js";
import usersRouter from "./routes/users.router.js";
import toysRouter from "./routes/toys.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/users", usersRouter);
app.use("/api/toys", toysRouter);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
