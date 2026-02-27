import "dotenv/config";
import express from "express";
import cors from "cors";
import eventsRoutes from "./routes/events.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();
const port = 3000;

app.use(cors({
    origin: process.env.FRONTEND_URL
}));
app.use(express.json());

app.use("/api/events", eventsRoutes);
app.use("/api/users", usersRoutes);

app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
        return res.status(200).json({ success: true });
    }
    res.status(401).json({ message: "Invalid credentials" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);

});
