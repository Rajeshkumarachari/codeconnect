const express = require("express");
const { adminAuth } = require("./middlewares/auth.js");
const app = express();

app.get("/getUserData", (req, res) => {
  res.send("All data sent");
});
app.arguments("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
  [];
});

app.listen(3001, () => {
  console.log("Server from 3000");
});
