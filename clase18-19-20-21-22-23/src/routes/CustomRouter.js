import { Router } from "express";

export default class CustomRouter {
  constructor() {
    this.router = Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  // '/api/users/:username', midle1,midle2,midle3,cb
  //'/api/users/:username', cb
  get(endpoint, ...functions) {
    this.router.get(
      endpoint,
      this.customeResponses,
      this.resolveFunctions(functions)
    );
  }

  post(endpoint, ...functions) {
    this.router.post(
      endpoint,
      this.customeResponses,
      this.resolveFunctions(functions)
    );
  }

  put(endpoint, ...functions) {
    this.router.put(
      endpoint,
      this.customeResponses,
      this.resolveFunctions(functions)
    );
  }

  delete(endpoint, ...functions) {
    this.router.delete(
      endpoint,
      this.customeResponses,
      this.resolveFunctions(functions)
    );
  }

  resolveFunctions(functions) {
    return functions.map((func) => {
      return async (...params) => {
        try {
          await func.apply(this, params);
        } catch (error) {
          return error;
        }
      };
    });
  }

  customeResponses(req, res, next) {
    res.succesResponse = (message, data) =>
      res.json({ status: "Success", message, data });
    res.errorResponse = (message) => res.json({ status: "Error", message });
    res.serverError = () => res.json({ status: "Server error" });
    next();
  }
}
