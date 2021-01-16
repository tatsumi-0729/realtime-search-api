const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");
const customSearch = google.customsearch("v1");
const bodyParser = require("body-parser");
require("dotenv").config();
const env = process.env;
const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.status(200).send("req.body");
});

app.post("/hoge", async function (req, res) {
  const keyword = req.body.key;
  if (!keyword) return;

  const result = await customSearch.cse.list({
    auth: env.ApiKey,
    cx: env.EngineId,
    q: keyword,
  });

  console.log(result.data.items[0]);
  res.status(200).send(result.data.items[0]);
});

app.listen(8080);
