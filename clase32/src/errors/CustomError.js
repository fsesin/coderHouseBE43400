export default class CustomError {
  static createError(message) {
    console.log(message);
    const error = new Error(message);
    throw error;
  }
}

// export default class NotFoundDocumentError {
//   static createError(entity) {
//     const error = new Error(`No se encontro un ${entity} en la bd`);

//     throw error;
//   }
// }
