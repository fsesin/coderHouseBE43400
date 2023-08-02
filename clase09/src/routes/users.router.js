import { Router } from "express";
import { usersManager } from "../UsersManager.js";

const router = Router()

router.post('/',async(req,res)=>{
await usersManager.createUser(req.body)
res.redirect('/allusers')
})


export default router