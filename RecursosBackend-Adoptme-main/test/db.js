import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/Adoptme43400?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conectado a db"))
  .catch((error) => console.log(error));
