import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
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
  role: {
    type: String,
    enum: ["teacher", "student"],
    default: "student",
  },
  courses: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Courses" }],
    default: [],
  },
});

export const usersModel = mongoose.model("Users", usersSchema);
