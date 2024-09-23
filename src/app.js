const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user.js");

app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:", err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3001, () => {
      console.log("Server from 3001");
    });
  })
  .catch((err) => {
    console.log("DB cannot be connected!!");
  });
