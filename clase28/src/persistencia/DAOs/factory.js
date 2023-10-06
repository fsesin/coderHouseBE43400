import config from "../../config.js";
import UsersFile from "./users/usersFile.js";
import UsersMongo from "./users/usersMongo.js";

let usersDao;
const persistencia = process.argv[2];
switch (persistencia) {
  case "MONGO":
    usersDao = new UsersMongo();
    break;

  case "FILE":
    usersDao = new UsersFile();
    break;
  default:
    break;
}

export default usersDao;
