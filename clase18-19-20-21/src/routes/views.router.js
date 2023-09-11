import { Router } from "express";

const router = Router()

router.get('/',(req,res)=>{
    res.render('login')
})
router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.get('/adminHome',(req,res)=>{
    res.render('adminHome')
})

router.get('/clientHome',(req,res)=>{
    res.render('clientHome')
})
export default router