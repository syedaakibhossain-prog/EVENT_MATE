import express from "express";
import cors from "cors";
import eventsRoutes from "./routes/events.routes.js";
import { events } from "./data/events.data.js";

const app = express();

const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/api/events", eventsRoutes);





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
