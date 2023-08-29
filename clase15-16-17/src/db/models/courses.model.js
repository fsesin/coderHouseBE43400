import mongoose from 'mongoose'

const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  students: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
      },
      quantity: {
        type: Number,
      },
    },
  ],
})

export const coursesModel = mongoose.model('Courses', coursesSchema)
