import express from "express";
import cors from "cors";
import eventsRoutes from "./routes/events.routes.js";

const app = express();

const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/api/events", eventsRoutes);

app.get("/api/events", (req, res) => {
    res.json({ message: "Events API working" });
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
