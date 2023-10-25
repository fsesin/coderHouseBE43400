import express from "express";
import config from "./config.js";
import { logger } from "./winston.js";
const app = express();

app.get("/", (req, res) => {
  console.log("Console log");
  logger.fatal("Fatal");
  logger.warning("Warning");
  logger.information("Information");
  logger.debug("Debug");
  res.send("Logger winston");
});

app.get("/test", (req, res) => {
  logger.information("/test endpoint");
  res.send("Test");
});

const PORT = config.port;
app.listen(PORT, () => {
  logger.information(`Escuchando al puerto prueba ${PORT}`);
});
