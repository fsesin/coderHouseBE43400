import { Router } from "express";
import { usersManager } from "../persistencia/UsersManager.js";
import { hashData } from "../utils.js";
import passport from "passport";
const router = Router();

router.post("/signup", async (req, res) => {
  const { first_name, last_name, username, password } = req.body;
  if (!first_name || !last_name || !username || !password) {
    return res.status(400).json({ message: "Some data is missing" });
  }
  const userDB = await usersManager.findUser(username);
  if (userDB) {
    return res.status(400).json({ message: "Username already used" });
  }
  const hashPassword = await hashData(password);
  const newUser = await usersManager.create({
    ...req.body,
    password: hashPassword,
  });
  res.status(200).json({ message: "User created", user: newUser });
});

router.get("/home", async (req, res) => {
  const { username } = req.session;
  const userDB = await usersManager.findUser(username);
  if (userDB.isAdmin) {
    res.redirect("/api/views/adminHome");
  } else {
    res.redirect("/api/views/clientHome");
  }
});

// passport github

router.get(
  "/githubSignup",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github",
  passport.authenticate("github", {
    failureRedirect: "/api/views",
    successRedirect: "/api/views/home",
  })
//   ,(req,res)=>{
//     console.log(req.user);
//     console.log(req.session);
//     res.send('Probando')
//   }
);
export default router;
