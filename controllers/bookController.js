import {  getBookbyID, addBook, editBook, deleteBook } from "../models/bookModels.js";

export const renderEditPage =  async(req,res) => {
    try {
        const id = req.query.edit;
       const book = await getBookbyID(id);
    res.render("add.ejs",{
        heading:"Edit Book",
        submit: "Edit Book",
        book: book
    });
    } catch (error) {
        console.log(error);
    }
}

export const addBookPage =  async (req, res) => {
    let title = req.body.title;
    let author = req.body.author;
    let rating = req.body.rating;
    let summary = req.body.summary;

   await addBook(title, author, rating, summary);
    res.redirect("/");    
};

export const editBookPage = async (req, res) => {
    let title = req.body.title;
    let author = req.body.author;
    let rating = req.body.rating;
    let summary = req.body.summary;
    let id = req.body.id;
    await editBook(title, author, rating, summary, id);
    res.redirect("/");
}

export const deleteBookPage = async (req, res) => {
    const id = req.body.book_id;
    await deleteBook(id);
    res.redirect("/");
}