const express = require("express");
const translation = require("./db/data.json");

const app = express();

const port = process.env.port | 3000;

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/translations", (req, res) => {
  res
    .status(200)
    .json({ data: translation, message: "translations obtained correctly" });
});

app.listen(port);
