import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { usersMongo } from "../DAL/daos/mongo/usersMongo.js";

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    }, async (email, password, done) => {
    try {
        const user = await usersMongo.getByEmail(email);
        if (!user) {
            return done(null, false, { message: 'User not found' });
        }
        const validate = await user.isValidPassword(password);
        
    )