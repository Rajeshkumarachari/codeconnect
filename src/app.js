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
//Delete a user from DB
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully..!");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
// Update data of the user
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User updated successfully..!");
  } catch (err) {
    res.status(400).send("User update went wrong" + err.message);
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
