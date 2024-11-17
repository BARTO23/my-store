const express = require("express");
const routerApi = require("./routes");
const app = express();
const port = 3000;



app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("Hola soy un nuevo endpoint");
});

app.get("/home", (req, res) => {
  console.log("aqui encontraras nuestra pagian principal");
});

app.listen(port, () => {
  console.log("My port: " + port);
});

routerApi(app);