import { ordersModel } from "../../mongoDB/models/orders.model.js";
import BasicMongo from "./basicMongo.dao.js";

class OrdersMongo extends BasicMongo {
  constructor() {
    super(ordersModel);
  }
}

export const ordersMongo = new OrdersMongo();
