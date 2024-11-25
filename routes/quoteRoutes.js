import express from "express";
import { renderHomePage } from "../controllers/quoteController.js";

const router = express.Router();

router.get("/home", renderHomePage);

export default router;