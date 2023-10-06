import usersDao from "../../persistencia/DAOs/factory.js";
import UsersDTO from "./users.dto.js";

//const usersDao = new UsersDao();

export const findAllUsers = async () => {
  const users = await usersDao.getAll();
  return users;
};

export const findUserById = async (id) => {
  const response = await usersDao.getById(id);
  //{_id,fullName,email,password} => bd
  //{first_name,last_name,email}=> cliente
  const user = new UsersDTO(response);
  return user;
};

export const createUser = async (obj) => {
  const createdUser = await usersDao.create(obj);
  return createdUser;
};
