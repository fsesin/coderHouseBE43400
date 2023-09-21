import { Router } from "express";
import { usersManager } from "../persistencia/UsersManager.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { jwtValidation } from "../middlewares/jwt.middleware.js";
const router = Router();

// router.get("/:username",jwtValidation,authMiddleware(['premium','admin']), async (req, res) => {
//   const { username } = req.params;
//   try {
//     const user = await usersManager.findUser(username);
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.status(200).json({ message: "User found", user });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.delete("/:username",jwtValidation,authMiddleware(['admin']) ,async (req, res) => {
//   const { username } = req.params;
//   try {
//     const user = await usersManager.deleteUser(username);
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.status(200).json({ message: "User deleted", user });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await usersManager.findUser(username);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await usersManager.deleteUser(username);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.param("username", (req, res, next, username) => {
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(username)) {
    return res.status(400).json({ message: "Invalid username" });
  }
  next();
});

export default router;
