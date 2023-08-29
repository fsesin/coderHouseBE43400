import { usersModel } from '../../db/models/users.model.js'
//import { studentsModel as usersModel } from "../../db/models/students.model.js"

class UsersMongo {
  // async findAll(){
  //     try {
  //         const users = await usersModel.find({})
  //         return users
  //     } catch (error) {
  //         return error
  //     }
  // }

  // paginate

  async findAll(obj) {
    const {limit,page,sortFirstName,...query} = obj
    console.log(query);
    try {
      const result = await usersModel.paginate(
        query,
        { limit,page,sort:{first_name:sortFirstName}}
      )
      const info = {
        count: result.totalDocs,
        payload: result.docs,
        totalPages: result.totalPages,
        nextLink: result.hasNextPage
          ? `http://localhost:8080/api/users?page=${result.nextPage}`
          : null,
        prevLink: result.hasPrevPage
          ? `http://localhost:8080/api/users?page=${result.prevPage}`
          : null,
      }
      return info
    } catch (error) {
      return error
    }
  }

  async createOne(obj) {
    try {
      const newUser = await usersModel.create(obj)
      return newUser
    } catch (error) {
      return error
    }
  }

  async findById(id) {
    try {
      const user = await usersModel.findById(id)
      return user
    } catch (error) {
      return error
    }
  }

  async updateOne(id, obj) {
    try {
      const response = await usersModel.updateOne({ _id: id }, { ...obj })
      return response
    } catch (error) {
      return error
    }
  }

  async deleteOne(id) {
    try {
      const response = await usersModel.findByIdAndDelete(id)
      //const response = await usersModel.deleteOne({_id:id})
      return response
    } catch (error) {
      return error
    }
  }

  async add(users) {
    try {
      await usersModel.create(users)
      return 'Users added'
    } catch (error) {
      return error
    }
  }

  // {name:'nombre'}
  async findOne(obj) {
    try {
      const user = await usersModel.findOne(obj).explain('executionStats')
      console.log(user)
      return user
    } catch (error) {
      return error
    }
  }
}

export const usersMongo = new UsersMongo()
