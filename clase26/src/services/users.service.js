import { usersManager } from "../DAL/users.manager.js";

export const getAll = () => {
  const response = usersManager.findAll();
  return response;
};

export const create = (obj) => {
  // hash password
  const response = usersManager.create(obj);
};
