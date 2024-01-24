import express from "express";
import translation from "./db/data.json" assert { type: "json" };

const app = express();

app.get("/api/translations", (req, res) => {
  res
    .status(200)
    .json({ data: translation, message: "translations obtained correctly" });
});

app.listen(3000);
