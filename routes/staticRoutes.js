import express from "express";
import { handleABoutPage,handleContactPage,handleBackPage, addPage} from "../controllers/staticController.js";

const router = express.Router();

router.get("/about", handleABoutPage);

router.get("/contact", handleContactPage);

router.get("/back", handleBackPage );

router.get("/add", addPage);


export default router;