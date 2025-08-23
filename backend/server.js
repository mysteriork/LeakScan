require("dotenv").config();
const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const auth = require("./auth");
const breaches = require("./breachCheck");

const PORT = process.env.PORT;
app.use(
  cors()
  //   {
  //   origin: "*",
  //   methods: ["GET", "POST"],
  //   allowedHeaders: ["Content-Type", "Authorization"],
  // }
);

app.use(
  session({
    secret: process.env.SECRET,
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
    console.log(`Server is running on ${PORT}`);
  } catch (error) {
    console.log("database connecting error", error);
  }
});

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/auth", auth);
app.use("/breach", breaches);
