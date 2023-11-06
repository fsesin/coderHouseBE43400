import express from "express";
import handlebars from "express-handlebars";
import cookieParser from "cookie-parser";
import { __dirname } from "./utils.js";
import "./db/configDB.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookies
app.use(cookieParser());

// handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
