import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  last_name: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, // TODO: hash password
    required: true,
    min: 6,
    max: 255,
  },
  role: {
    type: String,
    enum: ["teacher", "student"],
    default: "student",
  },
  courses: {
    type: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Courses",
      },
    ],
    default: [],
  },
});

export const usersModel = mongoose.model("Users", userSchema);
