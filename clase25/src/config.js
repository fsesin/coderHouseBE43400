import dotenv from "dotenv";
import program from "./commander.js";

const mode = program.opts().mode;

dotenv.config({
  path:
    mode === "testing"
      ? ".env.testing"
      : mode === "development"
      ? ".env.development"
      : ".env.stage",
});
export default {
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URI,
  jwt_secret_key: process.env.JWT_SECRET_KEY,
};
