import fs from 'fs'
import { __dirname } from '../../utils.js'

const path = __dirname + '/Users.json'

class UsersFile {
  async findAll() {
    try {
      if (fs.existsSync(path)) {
        const users = await fs.promises.readFile(path, 'utf-8')
        return JSON.parse(users)
      } else {
        return []
      }
    } catch (error) {
      return error
    }
  }

  async createOne(obj) {
    try {
      const users = await this.findAll()
      const id = users.length ? users[users.length - 1].id + 1 : 1
      users.push({ ...obj, id })
      await fs.promises.writeFile(path, JSON.stringify(users))
    } catch (error) {
      return error
    }
  }
}
