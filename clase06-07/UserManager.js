import fs from 'fs'

class UsersManager {
  constructor(path) {
    this.path = path
  }

  async getUsers() {
    try {
      if (fs.existsSync(this.path)) {
        const infoArchivo = await fs.promises.readFile(this.path, 'utf-8')
        return JSON.parse(infoArchivo)
      } else {
        return []
      }
    } catch (error) {
      return error
    }
  }

  async createUser(obj) {
    try {
      const usuariosPrev = await this.getUsers()
      let id
      if (!usuariosPrev.length) {
        id = 1
      } else {
        id = usuariosPrev[usuariosPrev.length - 1].id + 1
      }
      const newUser = { ...obj, id }
      usuariosPrev.push(newUser)
      await fs.promises.writeFile(this.path, JSON.stringify(usuariosPrev))
      return newUser
    } catch (error) {
      return error
    }
  }

  async getUserById(id) {
    try {
      const usuariosPrev = await this.getUsers()
      const usuario = usuariosPrev.find((u) => u.id === id)
      if (!usuario) {
        return 'Usuario con id no encontrado'
      }
      return usuario
    } catch (error) {
      return error
    }
  }

  async updateUser(id, obj) {
    try {
      const usuariosPrev = await this.getUsers()
      const usuarioIndex = usuariosPrev.findIndex((u) => u.id === id)
      if (usuarioIndex === -1) {
        return 'No hay un usuario con ese id'
      }
      const usuario = usuariosPrev[usuarioIndex]
      //const usuarioUpdate = {...usuario,...obj}
      usuariosPrev[usuarioIndex] = { ...usuario, ...obj }
      await fs.promises.writeFile(this.path, JSON.stringify(usuariosPrev))
    } catch (error) {
      return error
    }
  }

  async deleteUser(id) {
    try {
      const usuariosPrev = await this.getUsers()
      const nuevoArregloUsuarios = usuariosPrev.filter((u) => u.id !== id)
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(nuevoArregloUsuarios)
      )
    } catch (error) {
      return error
    }
  }
}

const usersManager = new UsersManager('Users.json')
export default usersManager
