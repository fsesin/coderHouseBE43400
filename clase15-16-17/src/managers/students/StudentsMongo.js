import { studentsModel } from '../../db/models/students.model.js'

class StudentsMongo {
  async aggregationMet() {
    try {
      const response = await studentsModel.aggregate([
        { $match: { calificacion: { $gt: 5 } } },
        {$group:{
            _id: '$gender',
            gender_count: {$count:{}},
            promedio_calificacion: {$avg:'$calificacion'}
        }},
        {$sort:{gender_count:-1}},
        {$match:{gender_count:{$gte:4}}},
      //  {$count: 'total'}
      ])

      return response
    } catch (error) {
      return error
    }
  }
}

export const studentsMongo = new StudentsMongo()
