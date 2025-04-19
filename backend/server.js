require("dotenv").config();
const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");
const auth = require("./auth");
const breaches = require("./breachCheck");

const PORT = 5500;
app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);

app.use(
  session({
    secret: "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", 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, 
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
  try {
    mongoose.connect("mongodb://localhost:27017/practice2");
    console.log("database connected !");
  } catch (error) {
    console.log("database connecting error", error);
  }
  console.log(`Server is running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/auth", auth);
app.use("/breach", breaches);
