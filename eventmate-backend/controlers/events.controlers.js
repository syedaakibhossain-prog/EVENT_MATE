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
        registrationFee: Number(registrationFee),
        createdAt: new Date()
    };

    events.push(event);
    res.status(201).json(event);
};

export const deleteEvent = (req, res) => {
    const eventId = Number(req.params.id);
    const index = events.findIndex(event => event.id === eventId);
    if (index === -1) {
        return res.status(404).json({ message: "Event not found" });
    }
    events.splice(index, 1);

    res.status(200).json({ message: "Event deleted successfully" });
};

export const setSelectedEvent = (req, res) => {
    const eventId = Number(req.params.id);
    const event = events.find(event => event.id === eventId);
    if (!event) {
        return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
};
