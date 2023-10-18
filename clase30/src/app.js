import express from "express";
import config from "./config.js";
import messagesRouter from "./routes/messages.router.js";
import viewsRouter from "./routes/views.router.js";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// routes
app.use("/api/messages", messagesRouter);
app.use("/", viewsRouter);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
