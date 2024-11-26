import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import session from "express-session";
import passport from "passport";
import bookRoutes from "./routes/bookRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import miscRoutes from "./routes/miscRoutes.js";
import staticRoutes from "./routes/staticRoutes.js";
import authRoutes from "./routes/authRoutes.js";

env.config();
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session ({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  maxAge: 1000 * 60 * 60 * 24,
}));

app.use(passport.initialize());
app.use(passport.session());

import "./config/passportConfig.js";

app.use("/",authRoutes);
app.use("/",bookRoutes);
app.use("/",quoteRoutes);
app.use("/",miscRoutes);
app.use("/",staticRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
