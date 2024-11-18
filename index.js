const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
const app = express();
const port = 3000;

const { logErrors, errorHandler, boomErrorHandler } = require("./middlewares/error.handler");

app.use(express.json());
app.use(cors());

const witelist = ["http://localhost:8080", "https://myapp.co"];
const options = { 
  origin: (origin, callback) => {
    if (witelist.includes(origin)) {
      callback(null, true);
    }
    else {
      callback(new Error("No permitido"));
    }
  }
}

app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("Hola soy un nuevo endpoint");
});

routerApi(app);
// Utilizamos los middleware. Siempre deben ir después del routing:
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get("/home", (req, res) => {
  console.log("aqui encontraras nuestra pagian principal");
});

app.listen(port, () => {
  console.log("My port: " + port);
});
