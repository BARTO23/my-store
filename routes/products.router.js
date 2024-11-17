const express = require("express");
const ProductsService = require('../services/products.service');



const router = express.Router();
const service = new ProductsService();

router.get("/", (req, res) => {
  const products = service.find();  
  res.json(products);
});

// Todo lo especifico va antes que lo dinamico
router.get("/special", (req, res) => {
  const products = [];
  for (let i = 0; i < 10; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      imageUrl: fajer.image.url(),
      image: faker.image.cats(),
      datatype: faker.datatype.json(),
    });
  }
  res.json(products);
});

router.get("/filter", (req, res) => {
  res.send("Soy un filtro");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
  });

router.post("/", (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({newProduct});
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "update",
    data: body,
    id,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "deleted",
    id,
  });
});

module.exports = router;
