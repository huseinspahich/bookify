import express from "express";
import axios from "axios";
import { showBooks } from "../models/bookModels.js";

const router = express.Router();

const API_URL = "https://api.realinspire.tech/v1/quotes/random";

export const renderHomePage = async (req, res) => {
    try {
        const sort = req.query.sort || 'id';
        const response = await axios.get(API_URL);
        const result = response.data;
        console.log(result);
        const books = await showBooks(sort);
        res.render("index.ejs", {
             quote: result[0].content,
             author: result[0].author,
             books,
            });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        })};
}
