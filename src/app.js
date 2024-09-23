const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user.js");
const user = require("./models/user.js");

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
//Get user by email

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("User not found !");
    } else {
      res.send(user);
    }
    // const users = await User.find({ emailId: userEmail });
    // if (users.length === 0) {
    //   res.status(404).send("User not found !");
    // } else {
    //   res.send(users);
    // }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//Feed API-GET / feed-get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
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
