import { coursesModel } from '../../db/models/courses.model.js'

class CoursesMongo {
  async findAll() {
    try {
      const courses = await coursesModel.find({})
      return courses
    } catch (error) {
      return error
    }
  }

  async createOne(obj) {
    try {
      const course = await coursesModel.create(obj)
      return course
    } catch (error) {
      return error
    }
  }

  async findById(id) {
    try {
      const course = await coursesModel.findById(id).populate('students',['first_name','last_name'])
      return course
    } catch (error) {
      return error
    }
  }

  async updateOne(id, obj) {
    try {
      const response = await coursesModel.updateOne({ _id: id }, { ...obj })
      return response
    } catch (error) {
      return error
    }
  }

  async deleteOne(id) {
    try {
      const response = await coursesModel.findByIdAndDelete(id)
      return response
    } catch (error) {
      return error
    }
  }
}

export const coursesMongo = new CoursesMongo()
