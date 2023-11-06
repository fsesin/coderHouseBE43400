import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  description: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  students: {
    type: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users",
      },
    ],
    default: [],
  },
  teacher: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
});

export const coursesModel = mongoose.model("Courses", courseSchema);
