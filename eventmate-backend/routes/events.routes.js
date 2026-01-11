import express from "express";
import {
    getAllEvents,
    creatEvents
} from "../controlers/events.controlers.js";

const router = express.Router();

router.get("/", getAllEvents);
router.post("/", creatEvents);



export default router;
