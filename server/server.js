const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
let events = [];
app.get("/events", (req, res) => {
    res.json(events);
});
app.post("/events", (req, res) => {
    const event = {
        id: Date.now(),
        name: req.body.name,
        description: req.body.description,
        time: req.body.time,
        location: req.body.location,
    }
    events.push(event);
    res.status(201).json(event);
});

app.delete("/events/:id", (req, res) => {
    const eventId = parseInt(req.params.id);
    const eventExists = events.some(event => event.id === eventId);
    if (!eventExists) {
        return res.status(404).json({ error: "Event not found" });
    }
    events = events.filter(event => event.id !== eventId);
    res.json({ message: "Event deleted successfully" });
});
app.listen(port, () => {
    console.log(`EventMate API running on http://localhost:${port}`);
});