const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("TEST from Server->Rajesh");
});
app.use("/user", (req, res) => {
  res.send("TEST from Server->Rajesh");
});

app.get("/user", (req, res) => {
  res.send({ name: "rajesh", role: "React" });
});

app.post("/user", (req, res) => {
  //console.log("Save data to the Database");
  res.send("Data successfully saved to the database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});
app.listen(3001, () => {
  console.log("Server from 3000");
});
