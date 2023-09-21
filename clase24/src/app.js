import express from "express";
import "./db/dbConfig.js";
import coursesRouter from "./routes/courses.router.js";
import studentsRouter from "./routes/students.router.js";
import passport from "passport";
import "./passport/passport.strategies.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import mongoStore from "connect-mongo";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookies
app.use(cookieParser());
// session
app.use(
  session({
    store: new mongoStore({
      mongoUrl:
        "mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/integradora43400?retryWrites=true&w=majority",
    }),
    secret: "sessionMongoKey",
  })
);
//passport
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/courses", coursesRouter);
app.use("/api/students", studentsRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
