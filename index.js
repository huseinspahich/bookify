import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg"; 

const db = new pg.Client ({
    user: "postgres",
    host: "localhost",
    database: "book",
    password: "10021972",
    port: 5434,
});
db.connect();

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const API_URL ="https://api.realinspire.tech/v1/quotes/random";

//const API_URL2 = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${API_KEY}`;
const API_KEY ="AIzaSyA9Cipgnat-CkYhteLf4uz807RJWAaDBKs";

let books = [];

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const result = response.data;
        console.log(result);

        const dbQuoteResponse = await db.query("SELECT * FROM books");

        res.render("index.ejs", {
             quote: result[0].content,
             author: result[0].author,
             books: dbQuoteResponse.rows
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
app.get("/add", async (req, res) => {
    res.render("add.ejs",{
        heading: "Add Book",
        submit: "Add New Book"
    });
});
app.get("/edit", async(req,res) => {
    try {
        const id = req.query.edit;
       let item = await db.query("SELECT * FROM books WHERE id = $1", [id]);
        let book = item.rows[0];
    res.render("add.ejs",{
        heading:"Edit Book",
        submit: "Edit Book",
        book: book
    });
    } catch (error) {
        console.log(error);
    }
})

app.post("/addBook", async (req, res) => {
    let title = req.body.title;
    let author = req.body.author;
    let rating = req.body.rating;
    let summary = req.body.summary;

    const response = await db.query("INSERT INTO books (title,authors,rating,summary) VALUES ($1, $2, $3, $4)", [title, author,rating,summary]);
    res.redirect("/");    
});



app.post("/delete", async (req, res) => {
    const id = req.body.book_id;
    
    const response = await db.query("DELETE FROM books WHERE id = $1", [id]);
    res.redirect("/");
})
app.post("/login", async (req, res) => {
    let message = "Submmited";
    res.render("contact.ejs", { message: message });
});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});