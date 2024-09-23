const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user.js");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Rajesh",
    lastName: "Kumar",
    emailId: "rajeshkumar@gmail.com",
    password: "smart@123",
  });

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
