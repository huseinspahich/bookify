import pg from "pg";
import env from "dotenv";
env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect();

export const showBooks = async(sort) => {
    const books = await db.query(`SELECT * FROM books ORDER BY ${sort} ASC`);
    return books.rows
};

export const getBookbyID = async(id) => {
    let item = await db.query("SELECT * FROM books WHERE id = $1", [id]);
    return item.rows[0];
}

export const addBook = async (title, author, rating, summary) => {
    await db.query("INSERT INTO books (title,authors,rating,summary) VALUES ($1, $2, $3, $4)", [title, author,rating,summary]);
};

export const editBook = async (title, author, rating, summary, id) => {
     await db.query("UPDATE books SET title = $1, authors = $2, rating = $3, summary = $4 WHERE id = $5", [title, author, rating, summary, id]);
}

export const deleteBook = async (id) => {
     await db.query("DELETE FROM books WHERE id = $1", [id]);
}