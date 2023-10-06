import { productsModel } from "../../mongoDB/models/products.model.js";
import BasicMongo from "./basicMongo.dao.js";

class ProductsMongo extends BasicMongo {
  constructor() {
    super(productsModel);
  }
}

export const productsMongo = new ProductsMongo();
