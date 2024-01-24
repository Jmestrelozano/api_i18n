import express from "express";
import translation from "./db/data.json" assert { type: "json" };

const app = express();

const port = process.env.port | 3000;

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/api/translations", (req, res) => {
  res
    .status(200)
    .json({ data: translation, message: "translations obtained correctly" });
});

app.listen(port);
