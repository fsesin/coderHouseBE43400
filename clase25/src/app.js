import express from "express";
import config from "./config.js";
const app = express();

const PORT = config.port;
console.log("MONGO_URI", config.mongo_uri);
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});

//console.log(process.env);
