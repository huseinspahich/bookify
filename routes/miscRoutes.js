import express from "express";
import { handleLogin, handleSort, homePagehandle, loginPagehandle, registerPagehandle } from "../controllers/miscController.js";

const router = express.Router();

router.post("/login", handleLogin);

router.post("/sort", handleSort);

router.get("/", homePagehandle);

router.get("/login", loginPagehandle);

router.get("/register", registerPagehandle);

export default router;