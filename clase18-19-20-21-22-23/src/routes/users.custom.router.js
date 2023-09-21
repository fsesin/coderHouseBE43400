import Router from "./CustomRouter.js";
import { usersManager } from "../persistencia/UsersManager.js";

class UsersRouter extends Router {
  init() {
    this.get("/:username", async (req, res) => {
      const { username } = req.params;
      try {
        const user = await usersManager.findUser(username);
        if (!user) return res.errorResponse("User not found");
        res.succesResponse("User found", user);
      } catch (error) {
        res.serverError();
      }
    });

    this.delete("/:username", async (req, res) => {
      const { username } = req.params;
      try {
        const user = await usersManager.deleteUser(username);
        if (!user) return res.status(400).errorResponse("User not found");
        res.succesResponse("User found", user);
      } catch (error) {
        res.serverError();
      }
    });
  }
}

export const usersCustomRouter = new UsersRouter();
