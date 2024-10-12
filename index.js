import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const API_URL ="https://api.realinspire.tech/v1/quotes/random";
const myAPI = "cRd1xHXHy4ga1K/PzOd6LA==Ap5k3YsIxERF5N9Z";

app.get("/", async (req, res) => {
    res.render("index.ejs");
})
app.get("/about", async (req, res) => {
    res.render("about.ejs");
});
app.get("/back", async (req, res) => {
    res.redirect("/");
});
app.get("/contact", async (req, res) => {
    res.render("contact.ejs");
});

app.post("/login", async (req, res) => {
    let message = "Submmited";
    res.render("contact.ejs", { message: message });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});