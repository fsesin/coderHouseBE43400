import fs from 'fs'
import { __dirname } from './utils.js'

class UsersManager {
  constructor(path) {
    this.path = path
  }
  async findUsers() {
    if (fs.existsSync(this.path)) {
      const usersFile = await fs.promises.readFile(this.path, 'utf-8')
      return JSON.parse(usersFile)
    } else {
      return []
    }
  }
  async createUser(user) {
    const users = await this.findUsers()
    users.push(user)
    await fs.promises.writeFile(this.path, JSON.stringify(users))
  }
}

export const usersManager = new UsersManager(__dirname+'/Users.json')