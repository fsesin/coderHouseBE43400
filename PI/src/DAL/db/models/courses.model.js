import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  students: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Users" }],
    default: [],
  },
  teacher: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
    default: null,
  },
});

export const coursesModel = mongoose.model("Courses", coursesSchema);
