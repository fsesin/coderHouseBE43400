import { usersModel } from "./mongoDB/models/users.model.js";

class UsersManager {

    async create(user){
        try {
            const newUser = await usersModel.create(user)
            return newUser
        } catch (error) {
            return error
        }
    }

    async findUser(username){
        try {
            const user = await usersModel.findOne({username})
            return user
        } catch (error) {
            return error
        }
    }
    async findUserById(id){
        try {
            const user = await usersModel.findById(id)
            return user
        } catch (error) {
            return error
        }
    }
}

export const usersManager = new UsersManager()