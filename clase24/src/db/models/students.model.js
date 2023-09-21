import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  studentType: {
    type: String,
    enum: ["junior", "senior"],
    default: "junior",
  },
  course: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Courses",
    default: null,
  },
});

export const studentsModel = mongoose.model("Students", studentsSchema);
