const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Howdy");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
