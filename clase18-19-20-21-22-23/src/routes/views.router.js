import { Router } from "express";
import { usersManager } from "../persistencia/UsersManager.js";
const router = Router();

router.get("/", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});

// router.get('/adminHome',(req,res)=>{
//     res.render('adminHome')
// })

router.get("/home", async (req, res) => {
  const { user } = req.session.passport;
  const userDB = await usersManager.findUserById(user);
  if (userDB.isAdmin) {
    return res.render("adminHome");
  }
  res.render("clientHome");
});
export default router;
