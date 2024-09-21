const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("test from Server->Rajesh");
});

app.use("/hello", (req, res) => {
  res.send("Hello from hello route");
});
app.listen(3001, () => {
  console.log("SERVER from 3000");
});
