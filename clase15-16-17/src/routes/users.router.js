import { Router } from 'express'
import { usersMongo } from '../managers/users/UsersMongo.js'
import fs from 'fs'
import {__dirname} from '../utils.js'
const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await usersMongo.findAll(req.query)
    // if (users.length) {
    //   res.status(200).json({ message: 'Users', users })
    // } else {
    //   res.status(200).json({ message: 'No users found' })
    // }
    res.status(200).json({ users })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await usersMongo.findById(id)
    if (!user) {
      res.status(400).json({ message: 'Invalid ID' })
    } else {
      res.status(200).json({ message: 'User found', user })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', async (req, res) => {
  const { first_name, last_name, email, password } = req.body
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ message: 'Some data is missing' })
  }
  try {
    const newUser = await usersMongo.createOne(req.body)
    res.status(200).json({ message: 'User created', user: newUser })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.put('/:id', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.delete('/:id', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error })
  }
})


////// Agregar 5000 usuarios en la bd
// const path = __dirname+'/Students.json'
// router.get('/add',async (req,res)=>{
//   const usersData = await fs.promises.readFile(path,'utf-8')
//   console.log('users',usersData);
//   await usersMongo.add(JSON.parse(usersData))
//   res.json({message:'Users added'})
// })

// router.get('/',async(req,res)=>{
//   const obj = {first_name:'Wren'}
//   const user = await usersMongo.findOne(obj)
//   res.json({user})
// })

export default router
