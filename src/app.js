const express = require("express");

const app = express();

app.get("/user/:userid/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ name: "rajesh", role: "React" });
});

app.listen(3001, () => {
  console.log("Server from 3000");
});
