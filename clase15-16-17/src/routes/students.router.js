import { Router } from "express";
import { studentsMongo } from "../managers/students/StudentsMongo.js";

const router = Router()

router.get('/aggregation',async(req,res)=>{
const response = await studentsMongo.aggregationMet()
res.json({response})
})

export default router