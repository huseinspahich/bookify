import express from "express";
import { addBookPage, deleteBookPage, editBookPage, renderEditPage } from "../controllers/bookController.js";

const router = express.Router();


router.get("/edit",renderEditPage)

router.post("/addBook",addBookPage);

router.post("/editBook", editBookPage)

router.post("/delete", deleteBookPage);


export default router;