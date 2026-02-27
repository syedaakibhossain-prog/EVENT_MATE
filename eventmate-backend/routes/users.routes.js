import express from "express";
import {
    getAllUsers,
    createUser,
    checkInUser
} from "../controlers/users.controlers.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/:eventId/register", createUser);
router.patch("/:id/checkin", checkInUser);

export default router;
