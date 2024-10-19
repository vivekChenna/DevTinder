const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/User");

app.post("/signup", async function (req, res) {
  try {
    const dummyData = {
      firstName: "virat",
      lastName: "kohli",
    };

    const user = new User(dummyData);

    await user.save();
    console.log("user created");

    return res.status(200).json({
      success: true,
      message: "successfully added the user",
    });
  } catch (error) {
    console.log("no user created");
  }
});

connectDB()
  .then(() => {
    console.log("database connected successfully ");
    app.listen(5000, () => {
      console.log("app started listening on 5000 port");
    });
  })
  .catch((error) => {
    console.log("something went wrong", error);
  });
