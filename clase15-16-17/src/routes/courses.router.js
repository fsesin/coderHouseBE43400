import { Router } from "express";
import { coursesMongo } from "../managers/courses/CoursesMongo.js";
const router = Router()

// router.get('/')

router.get('/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const course = await coursesMongo.findById(id)
    if (!course) {
      res.status(400).json({ message: 'Invalid ID' })
    } else {
      res.status(200).json({ message: 'Course found', course })
    }
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.post('/',async(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({ message: 'Some data is missing' })
    }
    try {
        const newCourse = await coursesMongo.createOne(req.body)
        res.status(200).json({ message: 'Course created', course: newCourse })
    } catch (error) {
        res.status(500).json({ error })
    }
})

// router.put('/:id')

// router.delete('/:id')

export default router