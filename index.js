import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const API_URL ="https://api.realinspire.tech/v1/quotes/random";
const myAPI = "AIzaSyD2cfS0e7IvJL-Sud-lwH5wdTR9Q2ntFwc";

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const result = response.data;
        console.log(result);
        res.render("index.ejs", {
             quote: result[0].content,
             author: result[0].author
            });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        })};
}); 
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