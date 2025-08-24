require("dotenv").config();
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const router = express.Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://leakscan-7jh8.onrender.com/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("User Profile:", profile);
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "consent",
    session: false,
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
    successRedirect: process.env.REDIRECT,
    session: false,
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.send("logged out successfully");
});

module.exports = router;
