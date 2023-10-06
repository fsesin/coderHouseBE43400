import { usersService } from "../services/users.service.js";

class UsersController {
  async findAllUsers(req, res) {
    try {
      const allUsers = await usersService.findAll();
      res.status(200).json({ messsage: "Success", allUsers });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async findUserById(req, res) {
    const { idUser } = req.params;
    try {
      const user = await usersService.findUserById(idUser);
      res.status(200).json({ messsage: "Success", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async createOneUser(req, res) {
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ message: "Some data is missing" });
    }
    try {
      const createdUser = await usersService.createOne(req.body);
      res.status(200).json({ message: "User created", user: createdUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    const { idUser } = req.params;
    try {
      const deletedUser = await usersService.deleteOne(idUser);
      res.status(200).json({ message: "User deleted", user: deletedUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const usersController = new UsersController();
