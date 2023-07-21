const fs = require('fs')
const crypto = require('crypto')

class UserManager {
  constructor(path) {
    this.path = path
  }

  async findUsers() {
    try {
      if (fs.existsSync(this.path)) {
        const data = await fs.promises.readFile(this.path, 'utf-8')
        return JSON.parse(data)
      } else {
        return []
      }
    } catch (error) {
      return error
    }
  }

  async createUser(obj) {
    try {
      const users = await this.findUsers()
      let id
      if (!users.length) {
        id = 1
      } else {
        id = users[users.length - 1].id + 1
      }
      const newUser = { ...obj, id }
      // newUser.password
      console.log(newUser);
      const hashPassword = crypto.createHash('sha256').update(newUser.password).digest('hex') 
      newUser.password = hashPassword
      console.log(hashPassword);
      users.push(newUser)
      console.log(users);
      await fs.promises.writeFile(this.path, JSON.stringify(users))
      return newUser
    } catch (error) {
      return error
    }
  }

  async validateUser() {}
}


// passwrod = '12345'
// ecryptado 'dfkjgrtuk548t5yguvireigl5g'
// desencriptar =  '12345

// password = '12345'
// hash = 'efergh65hhyhy'

const prueba = async()=>{
    const manager = new UserManager('Users.json')
    await manager.createUser({name: 'Juan',password:'12345'})
}

prueba()
