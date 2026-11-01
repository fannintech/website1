import { Router } from "express";
import { createContact } from "../controllers/contactController.js";
import { contactLimiter } from "../middleware/rateLimiter.js";
import { contactRules, handleValidation } from "../middleware/validateContact.js";

const router = Router();

router.post("/", contactLimiter, contactRules, handleValidation, createContact);

export default router;
