import { getAll, create } from "../services/users.service.js";

export const getUsers = (req, res) => {
  const users = getAll();
  res.status(200).json({ users });
};

export const createUser = (req, res) => {
  const { first_Name, last_name, email, password } = req.body;
  if (!first_Name || !last_name || !email || !password) {
    return res.status(400).json({ message: "Required data is missing" });
  }
  const newUser = create(req.body);
  res.status(200).json({ user: newUser });
};
