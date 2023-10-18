import express from "express";
import compression from "express-compression";
import CustomError from "./errors/CustomError.js";
//import NotFoundDocumentError from "./errors/CustomError.js";
import { ErrorMessages } from "./errors/error.enum.js";
import { errorMiddleware } from "./errors/error.middleware.js";
const app = express();

// app.use(compression({ brotli: { enabled: true, zlib: {} } }));
// //570kb - 8ms
// // 2.0kb - 27ms

// app.get("/test", (req, res) => {
//   let string = "Probando compresion con este string";
//   for (let i = 0; i < 100000; i++) {
//     string += "Probando compresion con este string de prueba con express";
//   }
//   res.send(string);
// });

app.get("/users", (req, res) => {
  //throw new Error("No se encontro usuario");
  //   CustomError.createError({
  //     message: "No se encontro usuario",
  //     name: "Error Usuario",
  //     cause: "El id no coincide con ningun documento de la bd",
  //   });
  CustomError.createError(ErrorMessages.USER_NOT_FOUND);
  //NotFoundDocumentError.createError("usuario");
});

app.get("/products", (req, res) => {
  //throw new Error("No se encontro usuario");
  CustomError.createError(ErrorMessages.PRODUCT_NOT_FOUND);
  // NotFoundDocumentError.createError("producto");
});

app.use(errorMiddleware);
app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
