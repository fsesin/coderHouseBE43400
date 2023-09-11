import { Router } from 'express'
import { usersManager } from '../persistencia/UsersManager.js'
import { compareData } from '../utils.js'
const router = Router()

router.post('/', async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({ message: 'Some data is missing' })
  }
  const userDB = await usersManager.findUser(username)
  if (!userDB) {
    return res.status(400).json({ message: 'Signup first' })
  }
  const isPasswordValid = await compareData(password, userDB.password)
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Username or Password not valid' })
  }

  req.session['username'] = username
  res.status(200).json({ message: 'Session created', user: userDB })
})

export default router
