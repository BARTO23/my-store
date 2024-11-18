const express = require("express");
const routerApi = require("./routes");
const app = express();
const port = 3000;

const { logErrors, errorHandler } = require("./middlewares/error.handler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("Hola soy un nuevo endpoint");
});

routerApi(app);
// Utilizamos los middleware. Siempre deben ir después del routing:
app.use(logErrors);
app.use(errorHandler);

app.get("/home", (req, res) => {
  console.log("aqui encontraras nuestra pagian principal");
});

app.listen(port, () => {
  console.log("My port: " + port);
});
