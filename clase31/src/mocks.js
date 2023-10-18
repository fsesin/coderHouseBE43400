//import { Faker, fr } from "@faker-js/faker";

//const faker = new Faker({ locale: [fr] });
import { fakerFR as faker } from "@faker-js/faker";

export const generateUser = () => {
  const products = [];
  for (let i = 0; i < 5; i++) {
    const product = generateProduct();
    products.push(product);
  }

  const user = {
    id: faker.database.mongodbObjectId(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    city: faker.location.city(),
    carts: products,
  };
  return user;
};

export const generateProduct = () => {
  const product = {
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
    stock: faker.number.int(100),
  };
  return product;
};
