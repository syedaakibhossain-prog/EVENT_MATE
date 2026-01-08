import { events } from "../data/events.data.js";

export const getAllEvents = (req, res) => {
    res.status(200).json(events);
};

export const creatEvents = (req, res) => {
    const { name, description, venue, date, registrationFee } = req.body;

    if (!name || !description || !venue || !date || !registrationFee) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const event = {
        id: Date.now(),
        name,
        description,
        venue,
        date,
        registrationFee,
        createdAt: new Date()
    };

    events.push(event);
    res.status(201).json(event);
}