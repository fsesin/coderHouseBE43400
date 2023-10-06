import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

const products = [
  {
    name: "Apple",
    price: 10,
  },
  {
    name: "Orange",
    price: 20,
  },
  {
    name: "Banana",
    price: 30,
  },
  {
    name: "Mango",
    price: 40,
  },
];

app.get("/", (req, res) => {
  res.json({ message: "Products", products });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
