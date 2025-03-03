import { Router } from "express";
import { 
    createTicket, 
    getTicketByCode } from "../controllers/ticket.controller.js";

const router = Router();

router.post("/", createTicket);
router.get("/:code", getTicketByCode);

export default router;
