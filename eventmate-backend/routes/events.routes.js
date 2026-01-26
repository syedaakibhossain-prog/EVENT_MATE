import express from "express";
import {
    getAllEvents,
    creatEvents,
    deleteEvent
} from "../controlers/events.controlers.js";

const router = express.Router();

router.get("/", getAllEvents);
router.post("/", creatEvents);
router.delete("/:id", deleteEvent);


export default router;
