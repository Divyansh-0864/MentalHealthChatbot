import express from "express";
import { chatWithGroq } from "../controllers/chatbotController.js";

const router = express.Router();

router.post("/chat", chatWithGroq);

export default router;
