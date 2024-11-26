import express from "express";
import passport from "passport";
import { register,logout } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);

router.post("/loggin", passport.authenticate("local", {
    successRedirect: "/index",
    failureRedirect: "/login"
}));

router.get('/auth/google',
    passport.authenticate('google', { scope:
        [ 'email', 'profile' ] }
  ));

router.get('/auth/google/secrets',
    passport.authenticate('google', {
        successRedirect: '/index',
        failureRedirect: '/login'
}));

router.get("/logout", logout);

export default router;