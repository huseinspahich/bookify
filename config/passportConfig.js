import passport from "passport";
import {Strategy} from "passport-local";
import bcrypt from "bcrypt";
import db from "../models/userModel";

passport.use("local",new Strategy(async function verify(username, password, cb) {
    try {
        const checkResult = await db.query("SELECT * FROM users WHERE email = $1",[username]);
        if (checkResult.rows.length === 0) {
            return cb("User not found");
        } else {
            const user = checkResult.rows[0];
            const userPassword = user.password;
            bcrypt.compare(password, userPassword, (err,result) => {
                if (err) {
                    return cb(err);
                } else {
                    if (result) {
                        return cb(null, user);
                    } else {
                        return cb(null,false);
                    }
                }
            })
        }
    } catch (error) {
        return cb(error)
    }
  }));

passport.use("google",new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/site',
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
  async (request, accessToken, refreshToken, profile, cb) => {
    try {
        console.log(profile);
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
          profile.email,
        ]);
        if (result.rows.length === 0) {
          const newUser = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            [profile.email, "google"]
          );
          return cb(null, newUser.rows[0]);
        } else {
          return cb(null, result.rows[0]);
        }
      } catch (err) {
        return cb(err);
      }
    }
  )
);

passport.serializeUser(function(user, cb) {
    return cb(null, user);
});  

passport.deserializeUser(function(user, cb) {
      return cb(null, user);
});
