const fs = require('fs')

class ManagerUsuarios {
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
      usuariosPrev.push({ ...obj, id })
      await fs.promises.writeFile(this.path, JSON.stringify(usuariosPrev))
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

const usuario1 = {
  nombre: 'Juan',
  apellido: 'Hoyos',
  edad: 25,
  curso: 'BackEnd',
}

obj = {
  apellido: 'Hernandez',
  edad: 35,
}
const usuario2 = {
  nombre: 'Luis',
  apellido: 'Abello',
  edad: 40,
  curso: 'FrontEnd',
}

async function prueba() {
  const manager = new ManagerUsuarios('Usuarios.json')
  //await manager.crearUsuario(usuario1)
  //const usuarios = await manager.consultarUsuarios()
  //const usuario = await manager.getUserById(4)
  //await manager.deleteUser(10)
  await manager.updateUser(8,{nombre: 'Carlos',course:'Javascript'})
  //console.log(usuario)
}

prueba()
