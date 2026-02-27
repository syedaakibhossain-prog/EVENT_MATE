import express from "express";
import {
    getAllEvents,
    creatEvents,
    deleteEvent,
    setSelectedEvent
} from "../controlers/events.controlers.js";

const router = express.Router();

router.get("/", getAllEvents);
router.post("/", creatEvents);
router.delete("/:id", deleteEvent);
router.post("/:id", setSelectedEvent);

export default router;
