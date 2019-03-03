const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.get("/products", (req, res) => {
  setTimeout(() => {
    res.json(require("./products.json"));
  }, 500);
});

app.listen(3001, () => console.log("server running at 3001"));
