import bcrypt from "bcrypt";
import db from "../models/userModel.js";

const saltRounds = 10;

export const register = async(req,res) => {
    const email = req.body.username;
    const password = req.body.password;
    
    try {
        const checkResult = await db.query("SELECT * FROM users WHERE email = $1",[email]);
        if (checkResult.rows.length > 0) {
            res.send("Already exists");
        } else {
            bcrypt.hash(password,saltRounds,async (err,hash) =>{
                if (err) {
                    console.log(err)
                } else {
                    const result = await db.query("INSERT INTO users (email,password) VALUES ($1,$2)",[email,hash]);
                    const user = result.rows[0];
                    req.login(user,(err) => {
                        console.log(err);
                        res.redirect("/index")
                    })
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
};

export const logout = (req, res) => {
    req.logout(function(err) {
      if (err) {
         return next(err);
         };
      res.redirect('/');
    });
  };


