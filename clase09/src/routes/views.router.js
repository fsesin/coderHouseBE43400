import { Router } from "express";
import { usersManager } from "../UsersManager.js"; 
const router = Router()

const users = [
    {
        nombre: 'Alejandro',
        apellido: 'Alvarez',
        email: 'aalvarez@mail.com'
    },
    {
        nombre: 'Carolina',
        apellido: 'Suarez',
        email: 'csuarez@mail.com'
    },
    {
        nombre: 'Andres',
        apellido: 'Montenegro',
        email: 'amontenegro@mail.com'
    }
]

router.get('/view1',(req,res)=>{
    const index = Math.floor(Math.random()*3)
    const user = users[index]
    res.render('view1',{nombre:user.nombre,apellido:user.apellido,email:user.email})
})

router.get('/view2',(req,res)=>{
    res.render('view2')
})

router.get('/viewlista',(req,res)=>{
    res.render('lista',{users})
})

router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.get('/allusers',async (req,res)=>{
    const users = await usersManager.findUsers()
    res.render('allusers',{users})
})

export default router