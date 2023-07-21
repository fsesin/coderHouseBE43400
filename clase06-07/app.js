import express from 'express'
import usersManager from './UserManager.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// rutas
//get 
app.get('/api/users', async (req, res) => {
  try {
    const users = await usersManager.getUsers()
    res.status(200).json({ message: 'Users', users })
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.get('/api/users/:idUser', async (req, res) => {
  const { idUser } = req.params
  try {
    const user = await usersManager.getUserById(+idUser)
    res.status(200).json({ message: 'User', user })
  } catch (error) {
    res.status(500).json({ error })
  }
})

//post
app.post('/api/users',async(req,res)=>{
    console.log(req.body);
    try {
        const newUser = await usersManager.createUser(req.body)
        res.status(200).json({ message: 'User created', user: newUser })
    } catch (error) {
        res.status(500).json({ error })
    }
})

// delete
app.delete('/api/users/:idUser',async(req,res)=>{
    const {idUser} = req.params
try {
    const response = await usersManager.deleteUser(+idUser)
    res.status(200).json({message:'User deleted'})
} catch (error) {
    res.status(500).json({ error })
}
})

// update
app.put('/api/users/:idUser',async(req,res)=>{
    const {idUser} = req.params
    try {
        const userUpdated = await usersManager.updateUser(+idUser,req.body)
        res.status(200).json({message: 'User updated'})
    } catch (error) {
        res.status(500).json({ error })
    }
})

app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})
