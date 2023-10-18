export const errorMiddleware = (error, req, res, next) => {
  //console.log("Probando", error);
  res.send({
    status: "Error",
    message: error.message,
  });
};
