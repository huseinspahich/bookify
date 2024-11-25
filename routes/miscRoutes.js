import express from "express";
import { handleLogin, handleSort } from "../controllers/miscController.js";

const router = express.Router();

router.post("/login", handleLogin);

router.post("/sort", handleSort);

export default router;