import { events } from "../data/events.data.js";
import { users } from "../data/users.data.js";
import QRCode from "qrcode";

export const getAllUsers = (req, res) => {
    res.status(200).json(users);
};

export const createUser = async (req, res) => {

    const eventId = Number(req.params.eventId);
    const { name, email, phone } = req.body;

    if (!eventId || !name || !email || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }


    const event = events.find(e => e.id === eventId);
    if (!event) {
        return res.status(404).json({ message: "Event not found" });
    }

    const duplicate = users.find(u => u.email === email && u.eventId === eventId);
    if (duplicate) {
        return res.status(409).json({ message: "Email already registered for this event" });
    }

    const registrationId = "USR" + Date.now();
    const user = {
        id: registrationId,
        eventId: event.id,
        eventName: event.name,
        name,
        email,
        phone,
        checkedIn: false,
        registeredAt: new Date()
    };

    users.push(user);

    const qrdata = JSON.stringify({ ticketid: registrationId });
    const qrImage = await QRCode.toDataURL(qrdata);

    res.status(201).json({
        message: "Registration successful",
        user,
        qrCode: qrImage
    });
};


export const checkInUser = (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    if (user.checkedIn) {
        return res.status(409).json({ message: "User already checked in" });
    }
    user.checkedIn = true;
    res.status(200).json({ message: "Checked in successfully", user });
};
