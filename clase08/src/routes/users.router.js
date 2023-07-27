import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router()
const users = []

router.get('/',(req,res)=>{
    res.status(200).json({message:'Users',users})
})

router.post('/',upload.single('file'),(req,res)=>{
    const id = users.length ? users[users.length-1].id + 1 : 1
    const user = {...req.body,id}
    users.push(user)
    res.status(200).json({message: 'New user', user})
})

export default router