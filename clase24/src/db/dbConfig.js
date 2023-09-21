import mongoose from "mongoose";

const URI =
  "mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/integradora43400?retryWrites=true&w=majority";
mongoose
  .connect(URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
