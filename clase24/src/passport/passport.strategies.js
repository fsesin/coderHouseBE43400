import passport from "passport";
import { studentsMongo } from "../db/managers/students.manager.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import { compareHashedData, hashData } from "../utils.js";

// Local - login
passport.use(
  "localLogin",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await studentsMongo.findByEmail(email);
        if (!user) {
          return done(null, false);
        }
        const comparePassowrds = compareHashedData(password, user.password);
        if (!comparePassowrds) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
// local - signup

passport.use(
  "localSignup",
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const { first_name, last_name } = req.body;
      if (!first_name || !last_name || !email || !password) {
        return done(null, false);
      }
      try {
        const user = await studentsMongo.findByEmail(email);
        if (user) {
          return done(null, false);
        }
        const hashPassword = await hashData(password);
        const newUser = { ...req.body, password: hashPassword };
        const response = await studentsMongo.createOne(newUser);
        done(null, response);
      } catch (error) {
        done(error);
      }
    }
  )
);

// google - singup
passport.use(
  "googleSignup",
  new GoogleStrategy(
    {
      clientID:
        "852979527136-4n2d7orjoh92bd8gijbf3unsdo9oqovb.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {}
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await studentsMongo(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
